//Creating an object
// key : value
var user = {
    firstName : "Prahlad",
    lastName : "Nayak",
    role : "Admin",
    loginCount : 32,
    fbSignedIn : true
};

user['test'] = 3;
user.courseCount = 5;

console.log(user);
// console.log(user.firstName);
// console.log(user["lastName"]);

// console.log(user.loginCount);
// user.loginCount = 44;
// console.log(user.loginCount);

console.table(user);