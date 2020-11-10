// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    // selectAll();
    selectAll: function (tableName, cb) {
        const queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, [tableName], function (err, result) {
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
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },



        // updateOne();
    updateOne: function (table, cols, vals, id, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, cols, vals, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}





module.exports = orm;