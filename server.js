const express = require("express");
const db = require("./db/db.json");
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/notes", (req, res) => {
    data = path.join(__dirname, "./public/notes.html");
    res.sendFile(data);
  });

app.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    // console.log(jsonData);
    res.json(jsonData);
  });
});

// Need to add post route, think i need uuid

// Need to add delete route

    
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));