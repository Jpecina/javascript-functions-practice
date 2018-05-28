// let john = {
//   name: "john",
//   yearOfbirth: 1990,
//   job: "teacher"
// };

//function Constructor

// let Person = function(name, yearOfbirth, job) {
//   this.name = name;
//   this.yearOfbirth = yearOfbirth;
//   this.job = job;
// };
// Person.prototype.calculateAge = function() {
//   console.log(2016 - this.yearOfbirth);
// };

// //instanciation
// let john = new Person("John", 1990, "Teacher");

// let jane = new Person("Jane", 1969, "Designer");
// let mark = new Person("Mark", 1948, "Retired");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

//Object.create

// let personProto = {
//   calculateAge: function() {
//     console.log(2016 - this.yearOfBirth);
//   }
// };

// let john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "Teacher";

// let jane = Object.create(personProto, {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1969 },
//   job:{value:"Designer"}
// });

//Primitives vs Objects

//Primitives
// let a = 23;
// let b = a;

// a = 46;

// console.log(a);
// console.log(b);

// //Objects
// let obj1 = {
//   name: "john",
//   age: 26
// };

// let obj2 = obj1;

// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// //Functions

// let age = 27;

// let obj = {
//   name: "Jonas",
//   city: "Lisbon"
// };

// function change(a, b) {
//   a = 30;
//   b.city = "San Fransisco";
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

//Passing functions as arguments(Callbacks)

// let years = [1990, 1980, 1523, 1892, 2000];

// function arrayCalc(arr, fn) {
//   let arrResult = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrResult.push(fn(arr[i]));
//   }
//   return arrResult;
// }

// function calculateAge(ele) {
//   return 2016 - ele;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return "Too Old";
//   }
// }

// let ages = arrayCalc(years, calculateAge);

// let fullAges = arrayCalc(ages, isFullAge);

// let rate = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rate);

// Functions returning Functions

// function interviewQuestion(job) {
//   if (job === "Designer") {
//     return name => {
//       console.log(name + ", can you please explain what UX design is?");
//     };
//   } else if (job === "Teacher") {
//     return name => {
//       console.log("What Subject do you teach, " + name + "?");
//     };
//   } else {
//     return name => {
//       console.log("hello " + name + " what do you do?");
//     };
//   }
// }

// let teacherQuestion = interviewQuestion("Teacher");
// teacherQuestion("jack");
// let designerQuestion = interviewQuestion("Designer");
// designerQuestion("John");

// interviewQuestion("Teacher")("Janet");

//IIFE immidiatly invoked function expressions

// function game() {}
// game();

// (function() {
//   let score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// // (function() {})(); //iife

// (function(goodluck) {
//   let score = Math.random() * 10;
//   console.log(score >= 5 - goodluck);
// })(5);

// Closures

// function retirement(retirementAge) {
//   let a = " Years left until retirement";
//   return yearOfBirth => {
//     let age = 2016 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// let retirementUs = retirement(66);

// retirementUs(1990);

// retirement(66)(1990);

// let retirementPol = retirement(65);

// retirementPol(1990);

// let retirementIceland = retirement(67);
// retirementIceland(1980);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === "designer") {
//       console.log(name + ", can you please explain what UX design is?");
//     } else if (job === "Teacher") {
//       console.log("What Subject do you teach, " + name + "?");
//     } else {
//       console.log("hello " + name + " what do you do?");
//     }
//   };
// }

// interviewQuestion("designer")("john");

// Bind ,Call and Apply

// let john = {
//   name: "John",
//   age: 26,
//   job: "teacher",
//   presentation: function(style, timeOfDay) {
//     if (style === "formal") {
//       console.log(
//         `Good ${timeOfDay}, ladies! I'm ${this.name}, I'm a ${
//           this.job
//         } and I'm ${this.age} years old.`
//       );
//     } else if (style === "friendly") {
//       console.log(
//         `Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${
//           this.age
//         } years old. Have a nice ${timeOfDay}`
//       );
//     }
//   }
// };

// let emily = {
//   name: "Emily",
//   age: 35,
//   job: "designer"
// };

// john.presentation("friendly", "morning");

// //Method Borrowing

// john.presentation.call(emily, "formal", "afternoon");

// // Apply method

// // john.presentation.apply(emily, ["friendly", "afternoon"]);

// // Bind Method

// let johnFriendly = john.presentation.bind(john, "friendly");

// johnFriendly("morning");

// let years = [1990, 1980, 1523, 1892, 2000];

// function arrayCalc(arr, fn) {
//   let arrResult = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrResult.push(fn(arr[i]));
//   }
//   return arrResult;
// }

// function calculateAge(ele) {
//   return 2016 - ele;
// }

// function isFullAge(limit, el) {
//   return el >= 18;
// }
// let ages = arrayCalc(years, calculateAge);

// let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages)
// console.log(fullJapan);

// (function() {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }
//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);

//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(`${i}: ${this.answers[i]}`);
//     }
//   };
//   Question.prototype.checkAnswer = function(ans) {
//     if (ans === this.correct) {
//       console.log("Correct Answer!!!");
//     } else {
//       console.log("Incorrect Answer!!!");
//     }
//   };

//   var q1 = new Question(
//     "Is Javascript the coolest programing language in the world?",
//     ["yes", "no"],
//     0
//   );
//   var q2 = new Question(
//     "what is the name of this course's teacher?",
//     ["John", "Micheal", "Jonas"],
//     2
//   );
//   var q3 = new Question(
//     "what does best describe coding",
//     ["boring", "hard", "fun", "tedius"],
//     2
//   );
//   // console.log(q1);

//   var questions = [q1, q2, q3];

//   var n = Math.floor(Math.random() * questions.length);

//   questions[n].displayQuestion();

//   const answer = parseInt(prompt("Please Select the correct answer"));

//   console.log(answer);

//   questions[n].checkAnswer(answer);
// })();

// ES6 ecma2015

// Lecture let and const

// var name5 = "Jane Smith";
// var age5 = 23;

// name5 = "Jane Miller";
// console.log(name5);

// // es6

// const name6 = "Jane Smith";
// let age6 = 24;
// name6 = "Jane Miller";
// console.log(name6);

// function driversLicence5(passedTest) {
//   if (passedTest) {
//     var firstName = "John";
//     var yearOfBirth = 1990;
//   }
//   // console.log(
//   //   firstName +
//   //     " was born in " +
//   //     yearOfBirth +
//   //     ", " +
//   //     "he is now allowed to drive"
//   // );
// }

// driversLicence5(true);

// function driversLicence6(passedTest) {
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     firstName = "John";
//   }
//   console.log(
//     firstName +
//       " was born in " +
//       yearOfBirth +
//       ", " +
//       "he is now allowed to drive"
//   );
// }

// driversLicence6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// Blocks and IIFEs

//ES6

// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }

// // console.log(a + b);

// // es5

// (function() {
//   var c = 3;
// })();
// console.log(c);

// Strings: Template Strings

// let firstName = "John";
// let lastName = "Smith";
// const yearOfBirth = 1990;

// function calculateAge(year) {
//   return 2016 - year;
// }

// // es5

// console.log("" + "");

// // ES6

// console.log(
//   `This is ${firstName} ${lastName} He was Born ${yearOfBirth}. today he is ${calculateAge(
//     yearOfBirth
//   )} years old`
// );

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith("J"));
// console.log(n.endsWith("th"));
// console.log(n.includes(" "));
// console.log(`${firstName} `.repeat(5));

// const years = [1990, 1965, 1982, 1937];

// // ES5

// var ages5 = years.map(function(current, i) {
//   return 2016 - current;
// });
// console.log(ages5);

// ES6

// const ages6 = years.map(current => 2016 - current);

// //Arrow functions 2 ... have a lexical this variable

// // ES5
// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector(".green").addEventListener("click", function() {
//       var str =
//         "this is box number" + " " + self.position + " and it is " + self.color;
//       alert(str);
//     });
//   }
// };

// box5.clickMe();

// //ES6

// var box6 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     document.querySelector(".green").addEventListener("click", () => {
//       const str =
//         "this is box number" + " " + self.position + " and it is " + self.color;
//       alert(str);
//     });
//   }
// };

// box6.clickMe();

// function Person(name) {
//   this.name = name;
// }

//es5

// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(current) {
//       return this.name + "is Friends with " + current;
//     }.bind(this)
//   );

//   console.log(arr);
// };

// var friends = ["bob", "Jane", "mark"];
// new Person("John").myFriends5(friends);

// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(current => {
//     return `${this.name} is Friends with ${current}`;
//   });

//   console.log(arr);
// };

// var friends = ["bob", "Jane", "mark"];
// new Person("Mike").myFriends5(friends);

//Destructuring

// ES5

// var john = ["John", 26];

// var name = john[0];
// var age = john[1];

//es6

// let [name, age] = ["john", 26];

// console.log(name);
// console.log(age);

// const obj = {
//   firstName: "John",
//   lastName: "Smith"
// };

// const { firstName, lastName } = obj;

// console.log(firstName);
// console.log(lastName);

// // Aliasing destructure
// const { firstName: a, lastName: b } = obj;

// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1990);

// console.log(age);
// console.log(retirement);

//ES6 ARRAYS

// const boxes = document.querySelectorAll(".box");

// // console.log(boxes);

// // //ES5

// // var boxesArr5 = Array.prototype.slice.call(boxes);
// // boxesArr5.forEach(element => {
// //   element.style.backgroundColor = "dodgerblue";
// // });

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => {
//   cur.style.backgroundColor = "dodgerblue";
// });

// // // LOOPS

// // //ES5

// // for (var i = 0; i < boxesArr6.length; i++) {
// //   if (boxesArr6[i].className === "box blue") {
// //     continue;
// //     // break;
// //   }
// //   boxesArr6[i].textContent = "I changed to blue";
// // }

// // For Of loop

// for (const cur of boxesArr6) {
//   if (cur.className.includes("blue")) {
//     continue;
//   }
//   cur.textContent = "I changed to blue";
// }

// // ES5

// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
//   return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

//ES5
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }
// var sum1 = addFourAges(18, 30, 12, 21);

// console.log(sum1);

// //
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //ES6 Spread Operator

// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ["john", "Jane", "Mark"];
// const familyMiller = ["Mary", "Bob", "Ann"];

// const bigFamily = [...familySmith, "Lilly", ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector("h1");

// const boxes = document.querySelectorAll(".box");

// const all = [h, ...boxes];

// Array.from(all).forEach(cur => (cur.style.color = "purple"));

// // all.forEach(cur => (cur.style.color = "purple"));

// console.log(all);

// Rest parameters

// ES5

// function isFullAge() {
//   console.log(arguments);
//   let argsArr = Array.prototype.slice.call(arguments);

//   argsArr.forEach(function(cur) {
//     console.log(2016 - cur >= 18);
//   });
// }

// isFullAge(1990, 1999, 1965);
// isFullAge(1990, 1999, 1965, 2016, 1987);

// //ES6

// function isFullAge6(...years) {
//   years.forEach(cur => console.log(2016 - cur >= 18));
//   // console.log(years);
// }
// isFullAge6(1990, 1999, 1965, 2016, 1987);

// Default Parameters

//ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? (lastName = "Smith") : lastName;
//   nationality === undefined ? (nationality = "American") : nationality;

//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// // var john = new SmithPerson("john", 1990);

// // ES6

// function SmithPerson(
//   firstName,
//   yearOfBirth,
//   lastName = "Smith",
//   nationality = "American"
// ) {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// var jane = new SmithPerson("jane", 1990, "Roberts");

//MAPs is a key value data structure

// const question = new Map();

// question.set(
//   "question",
//   "what is the official name of the latest major Javascript version"
// );
// question.set(1, "es5");
// question.set(2, "es6");
// question.set(3, "ES2015");
// question.set(4, "ES7");
// question.set("correct", 3);
// question.set(true, "Correct answer :D");
// question.set(false, "Wrong Try Again :(");

// console.log(question.get("question"));
// // console.log(question.size);

// // if (question.has(4)) {
// //   question.delete(4);
// // }

// // // question.clear();
// // question.forEach((value, key) =>
// //   console.log(`this is key: ${key} and its set to ${value}`)
// // );

// for (let [key, value] of question.entries()) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const ans = parseInt(prompt("Write the correct answer"));

// Classes

//ES5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  let age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};
var john5 = new Person5("John", 1990, "teacher");

//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    let age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    console.log("hey there");
  }
}

const john6 = new Person6("john", 1990, "teacher");

console.log(john5);
console.log(john6);

Person6.greeting();
