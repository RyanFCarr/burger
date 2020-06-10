const express = require("express");
const exphbs = require("express-handlebars");
const orm = require('./config/orm');

const app = express();

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

async function select(){
  console.table(await orm.selectAll());
}

// Root get route
app.get("/", async function(req, res) {
 let result = await orm.updateOne(5, 'buffalo');
  res.send(result);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  select();
});


