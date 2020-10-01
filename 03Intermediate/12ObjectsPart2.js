var user = {
    firstName : "Prahlad",
    lastName : "Nayak",
    role : "Admin",
    loginCount : 32,
    fbSignedIn : true,
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
    }
};

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());
console.log(user.courseList);
console.info(user);