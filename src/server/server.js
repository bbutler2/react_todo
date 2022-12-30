// make sure the dependencies are installed
const express = require('express');
const cors = require('cors');


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

