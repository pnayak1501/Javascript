var isLoggedIn = false;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("LOGGED IN SUCCESS");
//     if(isEmailVerified){
//         console.log("Email is VERIFIED");
//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Alllow user to make a purchase");
}else{
    console.log("You are not allowed to do that");
}