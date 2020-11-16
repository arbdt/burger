// import modules -----
let connection = require("./connection");

// create ORM object and commands -----
let orm = {
// select all
selectAll: function(tableName, callback){
    // run select all query from specified table
    let queryString = `SELECT * FROM ??`;
    connection.query(queryString, [tableName],function(error, result){
        if (error){
            throw error;
        } else{
            // send result to callback function for later use
            callback(result);
        }
    });
},
// insert one
insertOne: function(){
},
// update one
updateOne: function(){
}
};

// export ORM
module.exports = orm;