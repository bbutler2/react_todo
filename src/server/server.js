// // make sure the dependencies are installed
// const express = require('express');
// const cors = require('cors');


// // creating an express application
// const app = express();
// // allows cross-origin requests
// app.use(cors());
// // used to parse the incoming JSON payloads
// app.use(express.json());

// app.post("/post", (req, res) => {
//     console.log("Connected to React");
//     res.redirect("/");
// });

// const PORT = process.env.PORT || 8080;

// // starts the server
// /*
//     first argument is the port number
//     second argument is the callback function
// */
// app.listen(PORT, console.log(`Server started on port ${PORT}`));

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./database/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});