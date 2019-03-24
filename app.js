const express = require("express");
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@barcodedb-f6nnn.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(
    insert => {client.db('test').collection('devices').insertOne({'barCode' : 'bla'})},
    err => {
  const collection = client.db("test").collection("devices");
  console.error(err);
  // perform actions on the collection object
  client.close();
});



app.get('/', (req, res) => res.send('Hello World!'));


module.exports = app;