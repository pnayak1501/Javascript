const uid = "abc123"; // cant be changed afterwards because of the const keyword
// uid = "xyz"; //not possible 

var fullName = "Prahlad Nayak";
var email = "prahlad.is18@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name");
// alert(fullName);

console.log("Full name is ", fullName);
console.log("Full name is "+ fullName);
console.log(`
    With unique Id: ${uid}
    User is ${fullName}
    and his email is ${email}
    and uses the password ${password} 
`);