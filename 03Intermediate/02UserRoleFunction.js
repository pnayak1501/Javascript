// function getUserRole(name, role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all the access`;
//             break; // This is not necessary
//         case "sub-admin":
//             return `${name} is sub-admin with access to create and delete courses`;
//             break;
//         case "testprep":
//             return `${name} is testprep with access to the tests`;
//             break;
//         default:
//             return `${name} is a trial user`;
//             break;
//     }
// }

// The above function can also be written as-
var getUserRole = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all the access`;
            break; // This is not necessary
        case "sub-admin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to the tests`;
            break;
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Prahlad", "admin"));
console.log(getUserRole("Parag", "abc"));