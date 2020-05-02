const express = require("express");
const path = require("path");
const uuid = require("uuid");

const db = require("./db.json");

//Creating an express server
const app = express();

//Setting initial port
const PORT = process.env.PORT || 8080;

//Setting up Express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Listenter
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//Sending /notes to notes.html
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
  return res.json(db);
});

