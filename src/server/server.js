// make sure the dependencies are installed
const express = require('express');
const cors = require('cors');
const {mongoClient, MongoClient} = require('mongodb');

// retrieves a list of databases in the cluster and prints the results
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// connect to mongodb here
async function main() {
    // connection uri (a uniform resource identifier) 
    const uri = "mongodb+srv://cluster0.i720tg0.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        // connect to the mongodb cluster
        await client.connect();

        // make the appropriate db calls
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);

// creating an express application
const app = express();
// allows cross-origin requests
app.use(cors());
// used to parse the incoming JSON payloads
app.use(express.json());

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

const PORT = process.env.PORT || 8080;

// starts the server
/*
    first argument is the port number
    second argument is the callback function
*/
app.listen(PORT, console.log(`Server started on port ${PORT}`));

