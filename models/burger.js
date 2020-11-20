// import ORM
let orm = require("../config/orm");

// burger object definition
let burger = {
    // burger ORM functions -----
    // all burgers
    getAllBurgers: function (callback){
        // refer to ORM "selectAll" function
        orm.selectAll("burgers", function(output){
            // send output to callback
            callback(output);
        });
    },
    // insert burger
    createBurger: function (columnArray, valueArray, callback){
        // call ORM insert function
        orm.insertOne("burgers", columnArray, valueArray, function(output){
            // send output to callback
            callback(output);
        });
    },
    // change burger details
    updateBurger: function (columnArray, valueArray, conditions, callback){
        orm.updateOne("burgers", columnArray, valueArray, conditions, function(output){
            callback(output);
        });
    }
}

// export burger
module.exports = burger;