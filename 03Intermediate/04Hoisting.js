// ###########HOISTING################
// Function declaration are scanned and made available
// Variable declarations are scanned and made undefined
// ###############IMPORTANT###########

//global context is collecting all the data
// var num = 2;

// function sayMe(){
//     console.log("Say me");
// }

// sayMe(); //Execution context will come

tipper(5);

function tipper(a){
    var bill = parseInt(a); // For converting a string based input to integer type
    console.log(bill+5);
}

//This wont work as bigTipper is a variable, so it should be called only after the defination
var bigTipper = function(a){
    var bill = parseInt(a); // For converting a string based input to integer type
    console.log(bill+15);
}

bigTipper("200");

console.log(name); //As the variable name is not defined before
var name = "Prahlad";

function sayName(){
    var name = "Pallu";
    console.log(name);
}
sayName();

console.log(name);