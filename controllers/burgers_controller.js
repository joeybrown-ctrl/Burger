//Pulls in Express and models, and sets up Router
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//Get route (read/selects all)
router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Post route (creates)
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name"], [req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

//Put route (updates)
router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        "devoured", 1, req.params.id
        , function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

//Exports router for Models to use
module.exports = router;