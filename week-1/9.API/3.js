//String Slice

function getSlice(str,start,end){
    console.log("Original string: ",str);
    console.log("After slice: ",str.slice(start,end));
}
getSlice("Hello World",0,5)//strating from 0;not include 5

let ans='nalin dalal'.slice(0,5);
console.log(ans);
//nalin

const Value="Nalin Dalal";
let ans1=Value.substr(2,5);
let ans2=Value.slice(2,5);

console.log(ans1);
console.log(ans2);
//lin D
//lin