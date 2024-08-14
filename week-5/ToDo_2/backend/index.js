// write basic express boilerplate code,
// with express.json() middleware

const express = require('express');
const {createTodo}=require("./types");
const {todo}=require("./db");
const app = express();

app.use(express.json());

//validation
app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send me wrong inputs",
        });
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"Todo created successfully",
    });
})

app.get("/todos", async function(req, res) {
  const todos=await todo.find({});
  // console.log(todos)    //promise
  res.json({todos})
});

//mongodb schema updating
app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send me wrong inputs",
        });
        return;
    }
    //update in mongodb,todo having _id mark it as completed
    await todo.updateOne({_id:req.body.id},{
        completed:true
    })
    res.json({msg:"todo marked as completed"})
})

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
app.listen(3000);