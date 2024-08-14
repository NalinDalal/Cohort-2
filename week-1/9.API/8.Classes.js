const dog={
    name:'doggie',
    legCount:4,
    speaks:'barks'
}

console.log('animal '+dog['name']+" "+dog['speaks'])

//constructor
class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    speaks(){console.log('hi there'+this.speaks);}
}

// let dog1={
//     name:'dog'
// }
let dog1=new Animal('dog',4,'bark');
dog.speaks();