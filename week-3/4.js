const express = require("express");
const app = express();
app.get("/health-checkup", function(req, res) {
    console. log("hi from req1")
},function (req, res) {
    console.log("hi from req2")
});
app.listen(3000);