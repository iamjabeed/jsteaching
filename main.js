// alert("Error")

//JS Class

//? 1. Variables
//  var, let, const

// var name ="Jaddu"

// Key-words vs words ?

// var name1 = "Jaddu";

// var age = 25;

// console.log(age);

// console.log(name1);

// console.log( age + 5 );

// var num1 = 10;
// var num2 = 20;
// console.log( num1 + num2);

//? 2. Data Types
//* Primitive Data types
// 1. Number ---> 1,2,3,4,5
// var num3 = 1;
// 2. String ---> a, b, c, d, e,
// var name = "Sara";
// var name = 'Sara';
// 3. Boolean ----> true, false
// 4. Null
// 5. Undefined
// 6. symbol
// 7. Big int

//* Non-Primitive Data types
// Arrays
//  var arr = [24, 22, 56, 69];
//  var arr2 = ["sara", 89, 22, "Dc", true];

//* Objects
// key: values;
// var lan = { name: "Sara", age: 18, Course: "Cs" };

// Array of Objects
// var students = [
//   {
//     name: "jessica",
//     age: 34,
//     marks: 95,
//   },
//   {
//     name: "David",
//     age: 31,
//     marks: 90,
//   },
// ];

//? Functions // DRY-

// console.log("Jessica jhon");

// function getStudentAge(a, b) {
//   var add = a + b;
//   console.log(add);
// }
// getStudentAge(10, 20)
// getStudentAge(1000000000, 998989909)

// function mult(num1, num2) {
//   var mult = num1 * num2;
//   console.log(mult);
// }

// mult(9, 5);

// arrow Functions

// var add = (a, b) => {
//   var total = a + b;
//   console.log(total);
// };

// add(12, 4);

// var add = function (a, b) {};

// IIFE

// (function greet(a, b) {
//   var message = "Hello, IIFE!";
//   console.log(message);
//   console.log(a+b);
// })(1,2);

// (function setUp(a, b) {
//   return a + b;
// })(6, 4);

// let vs const vs var

// const name = "Js";
// let value = 66;

// var name1 = "sara"

// function nameCall() {
//   var name1 = "sara";
// }

// nameCall();

// console.log(name1);

// let

// function ageCall() {
//     let age = 46;
//     console.log(age);
// }
// ageCall()

//? Array Methods

// const language = ["Js", "Ruby", "C++", "Java"];

// const language2 = ["Python", "C", "Golang"];

// 1. Length
// console.log(language2.length);

// 2. concat

// const concatedArray = language.concat(language2);

// console.log(concatedArray);
// console.log(language2);
// console.log(language);

// const concatArray = language.concat(language2);
// console.log(concatArray);

// language.push("Python")
// console.log(language);

// language.unshift("Python")
// console.log(language);

// language.pop()
// console.log(language);

// 3. toString();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// const String1 = fruits.toString()
// console.log(String1);

// 4. join

// const joionStar = fruits.join(" & ");
// console.log(joionStar);

// language.forEach((elem, i, arr) => {
//   elem = "Hello " + elem;
  //   console.log(elem);
  // console.log(i);
  //   console.log(arr);
  //   arr[i] = "Hello " + elem;
  //   console.log(elem);
// });

// console.log(language);

// for (let i = 0; i < language.length; i++) {
//   console.log(language[i]);
// }

// language.forEach((x) => {
//   console.log(x);
// });
// console.log(language);

// const ages = [20, 30, 40, 50, 60];

// ages.forEach((age) => {
//   age = age + 5;
//   console.log(age);
// });

// console.log(ages);

// const actors = [
//   {
//     name: "John",
//     payment: 200,
//   },
//   {
//     name: "David",
//     payment: 250,
//   },
//   {
//     name: "Lora",
//     payment: 100,
//   },
//   {
//     name: "Cristy",
//     payment: 150,
//   },
// ];

// actors.forEach((actor) => {
//   return actor.payment = actor.payment - 10;
// console.log(actor);
// });
// console.log(actors);

// for (let actor of actors) {
// console.log(actor);
// }

// const movies = ["RRR", "Spider", "XYZ"];

// console.log(movies[0]);
// console.log(movies[2]);
// console.log(movies[1]);

// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
// }

// const movies = ["RRR", "Spider", "XYZ", "XXX"];

// movies.forEach((e) => {
  // console.log(e);
// });

// Objects

// const students = [
//   {
//     name: "Jaddu",
//     Marks: 95,
//   },
//   {
//     name: "Pavithra",
//     marks: 99,
//   },
// ];

// console.log(students[0].Marks);
