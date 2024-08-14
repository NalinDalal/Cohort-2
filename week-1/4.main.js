const personArray=["raman","kirat","harkirat"];
console.log(personArray);
console.log(personArray[0]);
console.log(personArray[1]);

//program to print even no in array

const ages=[21,22,23,24,25,26];

for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}
/*
//biggest no in an array
const numArray=[23,45,345,223,22,12,456,674];
for(let i=0;i<numArray.length;i++){
    if(numArray[i]=='male'){
        console.log(numArray1[i]);
    }
}
*/

//program to print all male people's first name given a complex object
const personArray1=['harkirat','nalin','priya'];
const genderArray1=['male','male','female'];

for(let i=0;i<personArray1.length;i++){
    if(genderArray1[i]=='male'){
        console.log(personArray1[i]);
    }
}