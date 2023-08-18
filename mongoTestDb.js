const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require('express');
const router = require('./routes');
const app = express();
const port = 8080;
const uri = "mongodb://0.0.0.0:27017/";
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const file = __filename

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

router(app);

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("test").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);


const menu = [
    {
        name: 'strogonoff',
        price: 39.99
    }
]

const test = client.db("test")
const prods = test.collection("produtos")
// const findProds = await prods.findOne({})
// const query = prods.find().toArray()

// const query = async () => {
//     let result = await prods.find().toArray()
//     console.log(result)
// }

// query()




module.exports = server;
