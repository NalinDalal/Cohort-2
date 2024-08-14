//Middlewares-function having access to request objects
const express= require('express');
const app=express();

//function that returns a boolean if age of person is greater than 14
function isOldEnough(age){
    if(age>=14){return true;}
    else{return false}
}

//endpoint with ticket checker-middleware as argument
function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({msg:"Sorry you are not of age yet",})
    }
}

app.get("/ride2",function(req, res){
    if(isOldEnough(req.query.age)){
    res.json({
        msg:"You have successfully riden the ride2"
    })
}else{
    res.status(411).json({msg:"Sorry not of age yet"})
}
})

app.get("/ride1",function(req, res){
    if(isOldEnough(req.query.age)){
    res.json({
        msg:"You have successfully riden the ride1"
    })
}else{
    res.status(411).json({msg:"Sorry not of age yet"})
}
})  //runs

app.use(isOldEnoughMiddleware);
app.listen(3000)