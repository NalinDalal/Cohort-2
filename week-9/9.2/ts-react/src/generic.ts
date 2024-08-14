function getFirstElement<T>(arr: T[]):T {
    return arr[0];
}

interface User{name:string;}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
const el2 = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
const el3 = getFirstElement<User>([{name:"harkiratSingh"}, {name:"ramanSingh"}]);
const el4 = getFirstElement<number>([1, 2, 3]);
const el5 = getFirstElement<boolean>([true, false, true]);

console.log(el)
console.log(el.toLowerCase())
console.log(el2.toLowerCase())