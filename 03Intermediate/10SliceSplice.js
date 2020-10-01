var users = ["Ted", "Regaltos", "Mortal", "Mavi", "Johny", "Kronten"];

console.log(users.slice(1,4)); //Slicing the array
console.log(users.slice(1));

//Removes the elements and replaces it with something else
users.splice(1,3,"HI"); // arrayName.splice(start,offset,replaceEle)
console.log(users);

users.splice(1,3,"HI","BYE"); // arrayName.splice(start,offset,replaceEle)
console.log(users);