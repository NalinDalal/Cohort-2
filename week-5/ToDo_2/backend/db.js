/*
Todo{
    title:string;
    description:string;
    completed:boolean
}
*/
const mongoose = require("mongoose");
//mongo url
// mongodb+srv://nalindalal2004:UadTCDWYJcYXeN39@database1.doxxncp.mongodb.net/

// since we can't commit this link to github hence we will create a env file and put it there
mongoose.connect("mongodb+srv://nalindalal2004:UadTCDWYJcYXeN39@database1.doxxncp.mongodb.net/")

//create the schema
const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoSchema);
module.exports={
    todo
}