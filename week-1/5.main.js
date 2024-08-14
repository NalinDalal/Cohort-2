//combine values using objects

const users=[{
    firstName:"harkirat",
    gender:"male"
},{
    firstName:"kripa",
    gender:"female"
},{
    firstName:"yogesh",
    gender:"male"
}
]
console.log(users['firstName'])

for(let i=0;i<users.length;i++){
    if(users[i]["gender"]=="male"){
        console.log(users[i]["firstName"])
    }
}

//WAP to reverse all elements of array