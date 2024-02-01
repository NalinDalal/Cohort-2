//Normal Function
function kiratAsyncFunction(){
    let p=new Promise(function(resolve){
        resolve('hi there!')
    });
    return p;
}

function main(){
    kiratAsyncFunction().then(function(value){
        console.log(value);
    });
}

main();

//Async,Await

function nalinAsyncFunction(){
    let p=new Promise(function(resolve)
    {
        resolve('hi there')
    })
    return p;
}

async function Main(){
    const value=await nalinAsyncFunction(2);
    console.log(value);
}

Main();