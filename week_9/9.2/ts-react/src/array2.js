"use strict";
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUsers([{
        firstName: "harkirat",
        lastName: "Singh",
        age: 21
    }, {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    },]));
