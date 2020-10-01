// sayHello();

// function sayHello(){
//     console.log("Hello");
// }

// JS has a bigger context in which everything resides, which is, window. 
if(2 === 2){
    console.log("This is true");
}

var myName = "hitesh";
if(myName === myName){
    console.log("This is again a true statement");
}

//This will give an error as node dosent have window as the global context.
// if(myName === window.myName){
//     console.log("This is again a true statement");
// }