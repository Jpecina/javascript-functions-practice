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


