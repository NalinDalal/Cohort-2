function isLegal(age: number){
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

let age=isLegal(19);
console.log(age); //true