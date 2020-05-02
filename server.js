const express = require("express");

//Creating an express server
const app = express();

//Setting initial port
const PORT = process.env.PORT || 8080;

//Setting up Express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Listenter
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  //Sending /notes to notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(_dirname, "notes.html"));
  });
  
  //Setting index.html as our home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "index.html"));
  });
