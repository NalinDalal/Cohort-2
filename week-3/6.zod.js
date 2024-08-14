const express = require("express");
const zod=require("zod");
const app = express();

const schema=zod.array(zod.number());

app.use(express.json());

// function middleware(req,res,next){
//   fetch().then((){
//     next()
    
//   })
// }

app.post("/health-checkup", function (req, res){
  const kidneys=req.body.kidneys;
  //const kidneyLength=kidneys.length;
  //res.send("You have"+kidneyLength+"kidneys");

  const response=schema.safeParse(kidneys)
  res.send({response})
});

// //global catches
// app.use(function(req,res,next){
//   res.json({
//     msg:"Sorry something is up with our server"
//   })
// })

app.listen(3000);