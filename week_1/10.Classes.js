const dog={
    name:'Bruno',
    legCount:4,
    speaks:'Barks'
}

console.log("Animal "+dog['name']+" "+dog['speaks'])

class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    speaks(){
        console.log('hi, there'+this.speaks);
    }
}

let dog1={
    name:'Bruno'
}

let dog2=new Animal('dog',4,'bark');
dog2.speaks();