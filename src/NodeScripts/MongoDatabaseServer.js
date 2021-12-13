const { MongoClient } = require('mongodb');
const MongoCredentials = require('../../credentials.json');
var express = require('express');
var app = express();
app.use(express.json());

const uri = MongoCredentials.MongoConnectURI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/query', async (req, res, next) => {
    console.log('querying');
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

    try{
        const result = client.connect(err => {
            const collection = client.db("Ticketing").collection("Users");
            collection.insertOne({
                First: req.body.firstname,
                Last: req.body.lastname,
                DOB: req.body.dob,
                Status: req.body.status
            });
            client.close();
        });
    } catch (error) {
        throw new Error("MongoClient exception");
    }

});

app.listen(5000, () => {
    console.log("Server is running at port 3000");
});