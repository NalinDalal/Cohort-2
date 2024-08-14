import express from 'express';
const app=express();
enum ResponseStatus{
    Success=200,
    NotFound=411,
    Error=500
}

// 200, 404, 411, 500
app.get("/",(req: express.Request, res: express.Response)=>{
    if(!req.query.userId){
        res.status(404).json({})
    }
    res.json({});
})

app.get("/123",(req: express.Request, res: express.Response)=>{
    if(!req.query.userId){
        res.status(404).json({})
}})