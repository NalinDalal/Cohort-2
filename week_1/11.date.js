const currentDate=new Date();
console.log(currentDate.getMonth());//11
console.log(currentDate.getDate());//23
console.log(currentDate.getFullYear());//2023
console.log(currentDate.getYear());//2023-1900=123
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

//epoch timestamp
const currentDate1=new Date();
console.log("Time in millisecond since 1.01.1970 :",currentDate.getTime());

function calculateSum(){
    let a=0;
    for(let i=0;i<100000;i++){a=a+i}
    return a;
}

const beforeDate=new Date();
const beforeTimeInMs=beforeDate.getTime();
calculateSum();

const afterDate=new Date();
const afterTimeInMs=beforeDate.getTime();
console.log(afterTimeInMs-beforeTimeInMs);