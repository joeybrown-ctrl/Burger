const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// router.post("/api/burgers", function (req, res) {
//     burger.create([
//         "name", "sleepy"
//     ], [
//         req.body.name, req.body.devoured
//     ], function (result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });

// router.put("/api/cats/:id", function (req, res) {
//     const condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     cat.update({
//         sleepy: req.body.sleepy
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });



module.exports = router;