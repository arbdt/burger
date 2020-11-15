// import modules
const mysql = require("mysql");

// set up connection -----
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: ""
});

// export as module
module.exports = connection;