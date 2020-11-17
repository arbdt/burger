// import ORM
let orm = require("../config/orm");

// burger object definition
let burger = {
// burger ORM functions -----
// all burgers
getAllBurgers(callback){
    // refer to ORM "selectAll" function
    orm.selectAll("burgers", function(output){
        callback(output);
    });
},
// insert burger
createBurger(columnArray, valueArray, callback){
    orm.insertOne("burgers", columnArray, valueArray, function(output){
        callback(output);
    });
},
// change burger details
updateBurger(column, conditions, callback){
    orm.updateOne("burgers", changedValues, conditions);
}
};

// export burger
module.exports = burger;