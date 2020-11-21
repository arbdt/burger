// import modules
const mysql = require("mysql");

// set up connection -----
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
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