// import modules
const mysql = require("mysql");

// set up connection -----
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: ""
});
// connect to database
connection.connect(function (error){
    if (error){
        console.error(error);
    }
    console.log("Connected to database.")
})
// export as module
module.exports = connection;