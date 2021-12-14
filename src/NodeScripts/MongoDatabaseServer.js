const { MongoClient } = require('mongodb');
const cors = require('cors');
const MongoCredentials = require('../../credentials.json');
var express = require('express');
var app = express();
app.use(express.json());
app.use(cors());

const uri = MongoCredentials.MongoConnectURI;

app.get('/query', async (req, res, next) => {
    console.log('querying');
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try{
        const result = client.connect(err => {
            const collection = client.db("Ticketing").collection("Customers");
            // do operations
            console.log("result = ", collection);
            client.close();
        })
    } catch (error) {
        throw new Error("MongoClient exception");
    }

});

app.post('/insert', async (req, res, next) => {
    console.log("POSTING with req = ", req.body);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try{
        const result = client.connect(err => {
            const collection = client.db("Ticketing").collection("Users");
            collection.insertOne({
                First: req.body.firstname,
                Last: req.body.lastname,
                DOB: req.body.dob,
                Status: req.body.status
            });
        });
        return res.status(200);
        client.close();
    } catch (error) {
        throw new Error("MongoClient exception");
    }

});

app.listen(5000, () => {
    console.log("Server is running at port 3000");
});