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
insertOne: function(tableName, columnArray, valueArray, callback){
    // begin query string
    let queryString = `INSERT INTO ${tableName} (`;
    // set column parameter into query string
    let columnString = columnArray.toString();
    queryString += `${columnString}) VALUES (`;
    // build value part of query string
    let valueString = [];
    for (let v=0; v < valueArray.length; v++){
        valueString.push("?");
    }
    queryString += `${valueString.toString()});`;
    console.log(queryString);
    // run query
    connection.query(queryString, valueArray, function(error, result){
        if (error){
            throw error;
        } else {
            // send result to callback function for later use
            callback(result);
        }
    });
},
// update one
updateOne: function(tableName, column, value, conditions, callback){
    // begin building query string
    let queryString = `UPDATE ${tableName} SET `;
    // add altered values to query
    queryString += `${column} = ${value}`;
    // add conditions to query
    queryString += ` WHERE ${conditions} `;
    console.log(queryString);
    // run query
    connection.query(queryString, function(error, result){
        if (error) {
          throw error;
        }
        else {
            callback(result);
        }
    });
}
};

// export ORM
module.exports = orm;