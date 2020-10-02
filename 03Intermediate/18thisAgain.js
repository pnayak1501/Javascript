// For all regular function calls, this points to window object(in node, global empty obejct)

console.log(this);

var user = {
    firstName : "Prahlad",
    courseCount : 4,
    getCourseCount : function(){
        console.log("LINE 9", this); // this contains the whole object
        function sayHello(){
            console.log("HELLO");
            console.log("LINE 12", this);
        }
        sayHello()
    },
};

user.getCourseCount();//This is not a regular function call, this is through an object



// function sayHello(){
//     console.log("Hello");
// }

// sayHello(); //this is a regular function call