const express = require("express");
const db = require("./db/db.json");
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// connecting home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// get the notes
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"))
});


    
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));