const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
  const wss = new WebSocketServer({ noServer: true });

  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  const connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    ws.on('message', (data) => {
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(data);
        }
      });
    });

    ws.on('close', () => {
      const index = connections.findIndex((c) => c.id === connection.id);
      if (index >= 0) {
        connections.splice(index, 1);
      }
    });

    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  setInterval(() => {
    connections.forEach((c) => {
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);

  function broadcastMessage(messageObject) {
    const message = JSON.stringify(messageObject);
    connections.forEach((c) => {
      c.ws.send(message);
    });
  }

  return {
    broadcastMessage,
  };
}

module.exports = { peerProxy };
