const express = require("express");
const db = require("./db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


    
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));