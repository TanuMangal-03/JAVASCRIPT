/*name = "tanu mangal";
console.log("fullname");


while loop==============================================

while(condition);
code

let i = 1;
while (i <=10){
  console.log(i);
}

let i = 1;
while (i<= 5){
    console.log("shradha khapra");
}


let i = 1;
while( i <= 10){
  console.log("i=",i);
  i++;
}



//DO-WHILE LOOP===========================================================================

 let i = 20;
 do{
  console.log("apna collage");
  i++;
 } while (i <= 10);


//for-of loop==================================================

let str = "apna collage";

for(let i of  str){
  console.log("i=",i);
}


//to print length of string
let str = "apna collage";

let size= 0;
for(let i of  str){
  console.log("i=",i);
  size++;
}

console.log("string=",size);




//for-in-loop================================

let student= {
  name:"rahul kumar",
  age:20,
  cgpa:7.5,
  ispass : true
};

for(let key  in student){
  console.log("key=",key,"value=",student[key]);
}*/



//practice question----------------------------
/*for(i = 0;i<= 100;i++){
  console.log(i);
  i=i+1;
}


//question number 2--

let gamenum = 25;
let usernum = prompt("guess the game number :");

while(usernum != gamenum){
  usernum = prompt("you entered wrong number,guess again");
}

console.log("congratulations,you entered the right number");*/




//STRINGS==================================================================================================
//string is a sequence of characters used to represent text=====================

/*let str = "apnacollage";
let str2 = 'apna collage';
console.log(str[0]);

//template literals=======================
//a way to embedded expressions in strings
//string interpolation===========================
//to create strings by doing substituion of placeholders

let specialstring = `this is a template literals`;
console.log(typeof specialstring);


//EXAMPLE OF TEMPLATELITERALS

let obj={
  item : "pen",
  price : 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//other way to write this '
console.log("the cost of",obj.item,"is",obj.price,"rupees");


console.log("apna\n collage");
console.log("apna\t collage");*/

///methods of sring
// 1. to uppercase =>  to change string lower case to upper case
// 2. to lowercase => to change string upper case to lower case
// 3.to trim => remove any extra and right,left space of string
// 4. str.slice(start,end) => return part of string

/*let str = "0123456789";
console.log(str.slice(1,6));

// 5.str1.concat(str2) => joins str2 with str1
// 6.str.replace => relace the string with new value
// 7.str.charAt(idx)=> find the index of the string

//practice question=============

 let fullname = prompt("enter your fullname without spaces");
 let username = "@" + fullname +fullname.length;
 console.log(username)
 
 alert("hello!");;



//ARRAYS IN JAVASCRIPT******************************************************************************************************.

let marks = [98,87,76,67,55];
console.log(marks);
console.log(marks.length);

//loops in array

let heroes = ["ironman","spiderman","hulk","shaktiman"];
//console.log(heroes[0]);

for(let idx = 0;idx<heroes.length;idx++){
  console.log(heroes[idx]);
}

let heroes = ["ironman","spiderman","hulk","shaktiman"];
for(let hero of heroes){
  console.log(hero);
}



let cities = ["pune","delhi","jaipur","mathura","mumbai"];

for(let city of cities){
  console.log(city);
}

//use uppercase methoda of above given code
let cities = ["pune","delhi","jaipur","mathura","mumbai"];

for(let city of cities){
  console.log(city.toUpperCase());
}



//practice question================================

//1=>find the avrage of given array
let marks =[85,97,67,63,98];

let sum = 0;
for(let val of marks){
  sum += val;

}

let avg  = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);*/


//2=> for a given aaray with price of 5 items all items have an offer of 10% OFF on them change the array to store final price after applyinf offer

//let items =[250,645,300,900,50];
/*let i  = 0;

for(let val of items){
  let offer = val /10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
}
// for uding for loop 

for (let i = 0;i<items.length;i++){
  let offer = items[i]/10;
  items[i] -= offer;
}

console.log(items);*/




//ARRAYMETHODS================================================================================

//1=>push() : add to end
// 2=> pop(): delete from end &return
// 3=> tostring() : convert array to string
// 4=>concat(): joins multiple arrays & returns result
// 5=> unshift(): add to start
// 6=>shift(): delete from start & return
//7=> Slice(): returns a piece of the array
// 8=>Splice(): change original array(add,remove,replace)



//push 
/*let fooditems = ["potatao","apple","banana","litchi"];
fooditems.push("paneer","choclate","icecream");

console.log(fooditems);

//pop
let fooditems = ["potatao","apple","banana","litchi"];
fooditems.pop();
console.log(fooditems);

//tostring
let fooditems = ["potatao","apple","banana","litchi"];
console.log(fooditems);
console.log(fooditems.toString());

//concat
let marvel_heroes= ["thor","spiderman","ironman"];
let dc_heroes = ["superman","batman"];

let heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);


//unshift
let marvel_heroes= ["thor","spiderman","ironman"];
marvel_heroes.unshift("antman");
console.log(marvel_heroes);

//shift
let marvel_heroes= ["thor","spiderman","ironman"];

let val = marvel_heroes.shift();
console.log("deleted",val);

//Slice
let marvel_heroes= ["thor","spiderman","ironman","antman","dr.stranger"];
console.log(marvel_heroes);
console.log(marvel_heroes.slice(1,2));

//splice
let arr =[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);

//add element
arr.splice(2,0.101);

//delete element
arr.splice(3,1);

//replace element
arr.splice(3,1,101);*/

//practice question

//create array to store companies
//remove the first company from the array
//remove uber &add Ola in its place
//ADD Amazon at the end


/*let companies =["bloomberg","microsoft","uber","google","IBM","Netflix"];

companies.shift();
console.log(companies);

companies.splice(2,1,"Ola");
companies.push("Amazon");
console.log(companies);



//FUNCTIONS-----------------------------------------------------------
//block of code that performs a specific task,can be invokved(call) whwnever needed
function myfunction(){
  console.log("welcome to apna collage");
  console.log("we are leraning js");
}

myfunction();


function sum(x,y){// local variables
  s=x+y;
  return s;
}

let val = sum(3,4); 
console.log(val);

//ARROW FUNCTION====================
//compact way of writing a function

function sum(a,b){
  return a + b;
}

const arrowSum = (a,b) => {
  console.log(a + b);
};

//multiplication function
function mul(a , b){
  return a * b;
}

const arrowmul = (a,b) => {
  return a*b;
};

const printhellow = () =>{
  console.log("hello");
};



//przctice question 1 => 
// create a function using the "function" keyword tht takes a string as an argument & return the number of vowels in the string

function countvowels(str){
  let count = 0;
  for (const char of str){
    if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
      count++;
    }
  }

  console.log(count);
}


//practice question 2
//create an arrow function to perform same task


// forEach loop in arrays=================================================================================================
//arr.forEah(callbackfunction)
//callbackfunction : here , it is a function to execute for each element in the array

//a callback is a function passed as an argument to another function

let arr = [1,2,3,4,5];

arr.forEach(function myfun(val){
  console.log(val);
})

// for arrow function
let arr = ["pune","mathura","jaipur"];

arr.forEach((val) =>{
  console.log(val);
  console.log(val.touppercase());

});


let arr = ["pune","mathura","jaipur"];

arr.forEach((val,idx,arr) =>{
  
  console.log(val.toUpperCase(),idx,arr);

});



//practice question=========================
//for a given array of number ,print the square of each value using the foreach loop

let arr = [1,2,3,4,5];

arr.forEach((num) => {
  console.log(num*num);
});


//method 0f array

// 1=> map("create a new array with the results of some operation . the value its callback return are used to form new array")
//syntax == arr.map(callbackfun(val,idx,arr))

let nums = [67,89,75];

nums.map((val) =>{
  console.log(val);
});


let nums = [67,89,75];

let newarr = nums.map((val) => {
  return val*2;
});

console.log(newarr);

// 2 => filter("create a new array of element that given true for a conditionfilter eg.all even element")
//let newarr = arr.filter((val)=>{
 // return val % 2 === 0;
 //});


let arr = [1,2,3,4,5,6,7];

let evenarr = arr.filter((val) =>{
  //return val % 2 === 0;
  //return val %! 2 ===0;
});

console.log(evenarr);


// 3=> reduce("performs some operations & reduces the array to a single value .it returns thet single value")

let arr = [1,2,3,4];

const output = arr.reduce((res,curr) => {
  return res + curr;
});

console.log(output);

//largest numer code

let arr = [3,6,9,4];
let output = arr.reduce((prev,curr) =>{
  return prev > curr ? prev : curr;
});

console.log(output);



//practice quest

let arr = [34,78,98,95,65];

let topper = arr.filter((val) => {
  return val>90;
});

console.log(topper);*/


// ques => 2

// let n = prompt("enter a number");

// let arr = [];

// for (let i = 1;i<= n;i++){
//   arr[i-1] = i;
// }

// console.log(arr);

/*let sum = arr.reduce ((prev,curr)=> {
  return prev + curr;
});

console.log(sum);*/

//DOM(DOCUMENT OBJECT MODEL)------------------------------------------------------------------------------------------------------------------------------


  











































 




 

  















































