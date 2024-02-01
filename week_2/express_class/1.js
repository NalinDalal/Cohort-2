//creating an http server
//express used
//node default library?-no

const express=require("express");

const app=express();

function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){ans=ans+i;}
    return ans;
}
app.get("/",function(req,res){
    const n=req.query.n;
    const ans=sum(n);
    res.send("Hi there,ans is "+ans);
})
app.listen(3001);
app.listen(6969);