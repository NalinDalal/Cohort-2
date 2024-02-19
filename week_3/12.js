//try and catch-throwing and catching the errors
function getLength(name){return name.length;}

//const ans=getLength()
//console.log(ans)

//when an exception is raised then process exit since js doesm't want to continue anymore

//we use try catch syntax

try{
    let a;
    console.log(a.length);
}catch(e){}
console.log("hi there")

try {
let a;
console. log(a.length);
console. log("hi there from inside");
} catch(e) {
console. log("inside catch statement");
}
// try catch syntax
console. log("hi there")