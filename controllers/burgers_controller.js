// import modules
let express = require("express");
let burger = require("../models/burger");

// create router
let router = express.Router();

// define router ----
// GET all burgers
router.get("/", function(request, response){
    // call burger get all
    burger.getAllBurgers(function(data){
        // send burgers to view renderer
        response.render("index",{burgers: data});
    });
});

// POST new burger
router.post("/api/burgers", function(request, response){
    // get POST components
    let newBurgerCols = ["burger_name", "devoured"];
    let newBurgerVals = [request.body.burger_name, false];
    console.log(`${newBurgerCols[0]}: ${newBurgerVals[0]}, ${newBurgerCols[1]}: ${newBurgerVals[1]}`);
    // call burger create with data from POST request
    burger.createBurger(newBurgerCols, newBurgerVals, function(data){
        // refresh page to display new entry in GET
        response.redirect("/");
    });
});

// PUT burger status
router.put("/api/burgers/:id"), function(request, response){
    let condition = `id=${request.params.id}`;
    burger.updateBurger();
};

// export router
module.exports = router;