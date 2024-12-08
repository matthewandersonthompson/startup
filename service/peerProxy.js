const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
  const wss = new WebSocketServer({ noServer: true });

  // Handle the HTTP to WebSocket upgrade
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Track active connections
  const connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    // Handle incoming messages
    ws.on('message', (data) => {
      // Echo the message to all other connections
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(data);
        }
      });
    });

    // Remove closed connections
    ws.on('close', () => {
      const index = connections.findIndex((c) => c.id === connection.id);
      if (index >= 0) {
        connections.splice(index, 1);
      }
    });

    // Respond to pong messages
    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Ping connections to keep them alive
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

  // A helper function to broadcast events from outside this file
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
