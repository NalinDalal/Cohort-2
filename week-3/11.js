const jwt=require("jsonwebtoken");

//decode, verify and generate
const value={
    name:"nalin",
    accountNumber:1244534562
}

//sign and not generate
const token=jwt.sign(value,"secret");
console.log(token);