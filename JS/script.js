console.log("Hej");
const a = 6;
let b = 2;

// try to re-assign const
/*
Uncaught SyntaxError: Identifier 'a' has already been declared (at script.js:6:7)
*/
//const a = 3;

let name = "name is lol";
let num = 3;
let num2 = 3.22;

let name2 = name.toUpperCase();
console.log(name);
console.log(name2);

let list = []
for (var i = 0; i < 10; i++) {
    list.push(Math.floor(Math.random()*500 + 1));
}
console.log(list);

let sortedlist = list.sort(function(a, b){return a - b});
console.log(sortedlist);
console.log(sortedlist[8]);

let course = {name: "js", points: 45, study_period: "10 weeks"};
course.teachers = [];
course.teachers.push("Thomas");
course.teachers.push("De-Blanch");
course.teachers.push("Drawin");
console.log(course);
console.log(course["teachers"]);
console.log(course.teachers);

