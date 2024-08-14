const users={
    'name':'nalin',
    'age':19,
    'gender':'male'
}

const user=JSON.parse(users);
console.log(user['gender'])
console.log(user['name'])

const users1={
    name:'yogesh',
    gender:'male'
}

const finalString=JSON.stringify(user)
console.log(finalString)