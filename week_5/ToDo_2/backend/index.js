// write basic express boilerplate code,
// with express.json() middleware

const express = require('express');
const {createTodo}=require("./types");
const app = express();

app.use(express.json());

//validation
app.post("/todo",function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send me wrong inputs",
        });
        return;
    }
    //put it in mongodb
})

app.get("/todos", function(req, res) {
  
});

//mongodb schema updating
app.put("/completed",function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send me wrong inputs",
        });
        return;
    }
    //update in mongodb
})

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
