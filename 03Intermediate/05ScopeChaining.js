var name = "Prahlad";

console.log("Line number 3 ",name);

function sayHello(){
    var name = "Mr P";
    console.log("Line number 7 ",name);
    sayHello2();

    function sayHello2(){
        console.log("Line number 11 ",name);
    }
}
sayHello();
