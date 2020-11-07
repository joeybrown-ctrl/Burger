// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    // selectAll();
    selectAll: function (tableName, cb) {
        const queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //fix these queries with ?? to staop any chance of SQL injection
    // insertOne();
    insertOne: function (table, cols, vals, cb) {
        console.log(cols);
        const queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}")`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },



        // updateOne();
    updateOne: function (table, cols, vals, id, cb) {
        const queryString = `UPDATE ${table} SET ${cols} = ${vals} WHERE id = ${id}`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}





module.exports = orm;