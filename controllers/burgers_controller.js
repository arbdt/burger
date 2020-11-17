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
    let newBurgerPOST = request.body;
    let newBurgerCols = ["burger_name", "devoured"];
    let newBurgerVals = [newBurgerPOST.name, newBurgerPOST.devoured];
    // call burger create with data from POST request
    burger.createBurger(newBurgerCols, newBurgerVals, function(data){
        // return confirmation of entry
        response.json(data);
    });
});

// PUT burger status
router.put("/api/burgers/:id"), function(request, response){

};

// export router
module.exports = router;