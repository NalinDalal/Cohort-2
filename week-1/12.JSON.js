/* const users={
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
*/

const users = {
    'name': 'nalin',
    'age': 19,
    'gender': 'male'
};

// No need for JSON.parse() here, as `users` is already a JavaScript object
console.log(users['gender']);  // male
console.log(users['name']);    // nalin

const users1 = {
    name: 'yogesh',
    gender: 'male'
};

// Convert the `users` object to a JSON string using JSON.stringify()
const finalString = JSON.stringify(users);
console.log(finalString);  // {"name":"nalin","age":19,"gender":"male"}

