import express from 'express';
const app()=express();
const port:number=3000;
enum ResponseStatus{Success=200,NotFound=411,Error=500}

app.get("/",(req,res)=>{
    res.status(ResponseStatus.Success).send("Hello World");
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).send("Not Found");
    }// tells that if the user is not found through the userid then send not found
})

app.get("/error",(req,res)=>{
    res.status(ResponseStatus.Error).send(Error);
})

app.listen({$port},()=>console.log("server is running on port 3000"))
