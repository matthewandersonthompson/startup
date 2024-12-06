// testMongoDB.js
const { MongoClient } = require('mongodb');
const dbConfig = require('./dbConfig.json');

const uri = `mongodb+srv://${dbConfig.userName}:${dbConfig.password}@${dbConfig.hostname}`;
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully!');
    const db = client.db('startup'); // Replace 'startup' with your database name
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  } finally {
    await client.close();
  }
}

testConnection();
