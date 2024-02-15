const express = require("express");
const app = express();
const z=require("zod");

// app.use(express.json())
app.use(express.static('public'));


const kidneysInput =z.literal("1").or(z.literal("2"));

app.post("/health-checkup",function(req,res){
  const kidneyId=req.body.kidneyId;
  const validation=kidneysInput.safeParse(kidneyId)
  if(!validation.success){
    res.send("Incorrect Input");
    return;
  }
  res.send("Your kidney id is "+kidneyId);
});
app.listen(4000);