var countries = ["India","Russia","USA","Australia"];

var states = new Array("Rajasthan","Karnataka","Maharastra","Assam");

console.log(states);
console.log(states[0]);

console.log(states.length);

states[0] = "Punjab";
console.log(states);

//This is not the best way to store values in the array(multiple datatypes in an array)
var user = ["Hitesh", "hitesh@lco.dev",3,34,true];
console.log(user);

user.pop(); //removes the last element of the array
console.log(user);

user.unshift("NEW VALUE"); //Adding element to the front of the array
console.log(user);

user.shift(); //Removing element from the front of the array
console.log(user);

console.log(user.indexOf(3)); //Gives the position of the value
console.log(user.indexOf('Hitesh'));
console.log(user.indexOf('neyd'));

console.log(Array.from("hitesh")); //Making an array of a string