const { MongoClient } = require('mongodb');
const cors = require('cors');
const MongoCredentials = require('../../credentials.json');
var express = require('express');
var app = express();
app.use(express.json());
app.use(cors());

const uri = MongoCredentials.MongoConnectURI;

const queryAllArray = [];

const queryArray = [];

app.get('/query-all', async (req, res, next) => {
    console.log('querying');
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try{
        const result = client.connect(err => {
            const collection = client.db("Ticketing").collection("Users");
            // do operations
            const cursor = collection.find();
            cursor.forEach((eachDocument) => queryAllArray.push(eachDocument));
        });
        client.close();
        return res.status(200).json(queryAllArray);
    } catch (error) {
        throw new Error("MongoClient exception");
    }

});

app.post('/query', async (req, res, next) => {

    console.log("querying with request");
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try{

        // form request
        let request = {};
        if (req.body.firstname) {
            request = { 'First': req.body.firstname };
        } if (req.body.lastname) {
            request = { ...request, 'Last': req.body.lastname };
        } if (req.body.dob) {
            request = { ...request, 'DOB': req.body.dob };
        } if (req.body.status) {
            request = { ...request, 'Status': req.body.status };
        }
        console.log('request = ', request);

        const result = client.connect(err => {
            const collection = client.db("Ticketing").collection("Users");
            // do operations
            const cursor = collection.find(request);
            cursor.forEach((eachDocument) => queryArray.push(eachDocument));
        });
        client.close();
        return res.status(200).json(queryArray);
    } catch (error) {
        console.log("querying error = ",error);
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
        client.close();
        return res.status(200).json(req.body);
    } catch (error) {
        throw new Error("MongoClient exception");
    }

});

app.listen(5000, () => {
    console.log("Server is running at port 3000");
});