//Array all operations mf

const array=[1,2,3];

//push operation
array.push(4);
console.log(array);

//pop operation
array.pop();
console.log(array);

//unshift
array.unshift(0);
console.log(array);

//concat
const array1=[1,2,3];
const array2=[4,5,6];
console.log(array1.concat(array2));

//foreach-iterate over array
const array_1=[1,2,3];

function logThing(str){
    console.log(str);
}

array_1.forEach(logThing);