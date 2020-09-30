var user = "testprep";

switch(user){
    case "admin":
        console.log("You get full access");
        break;
    
    case "sub-admin":
        console.log("Gets accsss to create/delete courses");
        break;
    
    case "testprep":
        console.log("Gets accsss to create/delete tests");
        break;

    case "user":
        console.log("Gets accsss to consume content");
        break;

    default: 
        console.log("Trial user");
        break;

}