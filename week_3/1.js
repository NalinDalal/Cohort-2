const express=require("express");
const app=express();
app.get("/health-checkup",function(req,res){
    res.send("Heart is Healthy");
});

app.listen(3001);