function square(n){
    console.log("Square called");
    return n*n;
}

function sumOfSomething(a,b){
    return a+b;
}

let squ=square(5);
console.log(squ);

let ans=sumOfSomething(square(1),square(2));
console.log(ans);