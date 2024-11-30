const { MongoClient } = require('mongodb');
const config = require('../dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

async function connectToCollection(collectionName) {
  try {
    await client.connect();
    const db = client.db('cs260');
    return db.collection(collectionName);
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
}

module.exports = { connectToCollection };
