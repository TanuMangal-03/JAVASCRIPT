//console.log("welcome to apna collage !");

// let num = prompt("enter a number");

// let name = "Alice";
// let name = "Bob";

// console.log(name); // Output: Bob


// let score= 0;
// const playerName = "Riya";
// function answerQuestion( isCorrect) {
//     if (isCorrect) {
//         score += 10;
//     }
// }
// answerQuestion(true);
// answerQuestion(false);

// console.log(playerName + " '$ score is :", score ); 


// const doublle = (num) => num * 2;

// console.log(doublle(5));


// function greet(name) {
//     return "Hello, " + name + "!";
// }

// function add(a, b) {
//     return a + b;
// }

// function isEven(num) {
//     return num % 2 === 0;
// }   

// const greet = (name) => "Hello, " + name + "!";

// const add = (a,b) => a + b;

// const isEven = (num) => num % 2 === 0;

// use arrow with arrays
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(num => num * num);

// console.log(squares); // Output: [1, 4, 9, 16, 25]

// let score = 0;
// const IncreaseScore = (points)    =>  (score += points);
// const DecreaseScore = (points) => (score -= points);

// IncreaseScore(10);
// DecreaseScore(5);
// IncreaseScore(20);

// console.log("Final Score:", score); // Output: Final Score: 25


//template literals
// let name = "riya";
// const birthYear = 2004;
// console.log(` Hello My name is ${name} and I am ${2025 -birthYear}old`);
// console.log("Hello my name is " + name + " and i am"  + "years old");


// const product = "Laptop";
// const price = 55000;
// const message = `you bought a ${product}
// for ${price}.
// thanks  you for shopping!`;

// console.log(message);


// const person = {
//     name: "Riya",
//     age: 20,
//     city : "Mathura",
//     introduce : function() {
//         return ` hello my name is ${this.name},
//         i am ${this.age} years old,
//         i'm from ${this.city}`;
//     },
// };

// const herName = person.name;
// const herAge = person["age"];
// const herCity = "city";
// console.log(person.introduce());
// console.log(herName);

// const {name : herName , age : herAge , city : herCity} = person;
// console.log(herName);
// console.log(herAge);
// console.log(herCity);


// let herAge = "age";
// console.log(person[herAge]);
// person.birthYear = 2025 - person.age;
// person.tellyourage = function() {
//     console.log(`i am ${this.age} years old`);
// };
// person.tellyourage();
// console.log(person);


// const[ , , ,fourth,fifth] = [
//     "apple",
//     "banana",
//     "cherry",
//     "mango",
//     "grapes",
// ];

// console.log( fourth,fifth);


const fruits = ["apple","banana","cherry"];
const moreFruits = ["mango","grapes","orange","pineapple"];

// const combinefruits=[...fruits,...moreFruits];

// //const combinefruits = fruits.concat(moreFruits);
// console.log(combinefruits);                                         

// const [firstfruit ,secondfruit ,...restfruits] = combinefruits;
// console.log(restfruits);


// function sum(...values){
//     console.log(values);
//     let sum =0;
//     for(let i = 0;i<values.length;i++){
//         sum += values[i];
//     }
//     console.log(sum);
// }
// sum (3,4,5);
// sum (10,20,30,40,50);
// sum (1,2,3,4,5,6,7,8,9,10);



// console.log(10);
// setTimeout(() => {
//     console.log(20);
// }, 2000);
// console.log(30);


// let count = 1;
// const timer = setInterval(() => {
//     console.log("Hello" + count);
//     count++;
//     if (count >5) clearInterval(timer);
// }, 1000);




