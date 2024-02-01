function greet(){
    console.log('Hello World')
}

setTimeout(greet,3*1000)

console.log("The following message will be printed after 3sec:")

function fetchData(){
    console.log('Requesting data from server...');

    setTimeout(()=>{
        console.log('Data Received')
    },4000)
}

fetchData();