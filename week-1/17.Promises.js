const fs=require('fs');

function nalinReadFile(){
    return new Promise(function(resolve){
        fs.readFile('a.txt','utf-8',function(err,data){
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data)
}

nalinReadFile().then(onDone);

//they are just class that makes callbacks and async function more readable

//Promise:

var d=new Promise(function(resolve){
    resolve('foo');
});

function callback(){
    console.log(d);
}

console.log(d);
d.then(callback)