const express=require("express");
const z=require("zod");
const app=express();

app.use(express.json());

const kidneysInput=z.literal("1").or(z.literal("2"));
app.post("/health-checkup",function(req,res){
    const kidneyId=req.body.kidneyId;
    const validation=kidneysInput.safeParse(kidneyId);
    if(!validation.success){
        res.send("Incorrect Input");
        return;
    }
    res.send("your Kidney Id is "+kidneyId);
});
app.listen(3001);