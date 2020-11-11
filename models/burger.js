//Pulls in the ORMs
const orm = require("../config/orm.js");

//Burger models
const burger = {

    //correllates to get route
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    
    //correllates to post route
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    
    //correllates to put route
    update: function (cols, vals, id, cb) {
        console.log(cols);
        orm.updateOne("burgers", cols, vals, id, function (res) {
            cb(res);
        });
    },
};

//Exports to controller
module.exports = burger;