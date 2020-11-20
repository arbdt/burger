// import modules -----
let express = require("express");
let exphbs = require("express-handlebars");


// set up express app instance -----
const PORT = process.env.PORT || 8080;
let app = express();

// parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static link for css file
app.use(express.static("public"));

// set up to use routes from controller
let router = require("./controllers/burgers_controller.js");
app.use(router);

// link in handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// launch server -----
app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});
