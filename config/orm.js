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
insertOne: function(tableName, columnNames, values, callback){
    // begin query string
    let queryString = `INSERT INTO ${tableName} (`;
    // set column parameter into query string
    let columnString = columnNames.toString();
    queryString += `${columnString}) VALUES (`;
    // build value part of query string
    let valueString = [];
    for (let v=0; v < values.length; v++){
        valueString.push("?");
    }
    queryString += `${valueString.toString()});`;
    // run query
    connection.query(queryString, values, function(error, result){
        if (error){
            throw error;
        } else {
            // send result to callback function for later use
            callback(result);
        }
    });
},
// update one
updateOne: function(){
}
};

// export ORM
module.exports = orm;