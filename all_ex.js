// function sumArray(arr) {                1                    
//     let sum = 0;
//     for (let el of arr) {
//         sum += el;
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4]));


// function printMatrix(matrix) {                            2
//     for (let row of matrix) {
//         let line = "";
//         for (let element of row) { 
//             line += element + " "; 
//         }
//         console.log(line); 
//     }
// }
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// printMatrix(matrix);

// function countdown(n) {                        3
//     while(n > 0) {
//         console.log(n)
//         n -= 1
//     }
// }
// countdown(7)

// function repeatMessage(msg, times) {              4
//     let count = 0; 
//     do {
//         console.log(msg);  
//         count++;  
//     } while (count < times);  
// }
// repeatMessage("Hello, world!", 3);



// function printObjectKeys(obj) {                5
//     for (let key in obj) { 
//         console.log(key);   
//     }
// }
// const person = {
//     name: "Tom",
//     age: 15,
//     city: "Madrid"
// };
// printObjectKeys(person);


// function logArray(arr) {                        6
//     arr.forEach(function(element) {
//         console.log(element);  
//     });
// }
// const numbers = [1, 2, 3, 4, 5];
// logArray(numbers);

// function findFirstNegative(arr) {                         
//     // let negative = "No negative number";
//     for (let el of arr) {
//         if (el < 0) {
//             return el
//             // negative = el; 
//             // break;  
//         }
//     }
//     return "No negative number"
// }
// console.log(findFirstNegative([15, 25, 5, -8, 96]));  
// console.log(findFirstNegative([15, 25, 5, 8, 96]));  


// function skipOddNumbers(arr) {                   8
//     for (let el of arr) {
//         if (el % 2 !== 0) {  
//             continue;  
//         } else {
//             console.log(el);  
//         }
//     }
// }
// skipOddNumbers([15, 20, 25, 30, 78]);


// function sumArrayWithForOf(arr) {             9
//     let sum = 0;
//     for (let el of arr) {
//         sum += el;  
//     }
//     return sum;  
// }
// console.log(sumArrayWithForOf([1, 2, 3, 4, 5]));  


// function logSetElements(set) {              10
//     for (let el of set) {
//         console.log(el);  
//     }
// }
// let mySet = new Set([1, 2, 3, 4, 5]);
// logSetElements(mySet); 


// function greet(name) {                  11
//     return `Hello, ${name}`;
// }
// console.log(greet("Ann"))

// function multiply(a, b = 1) {               12
//     return a * b 
// }
// console.log(multiply(5))

// const add = (a, b) => a + b;              13
// console.log(add(3, 5));


// const square = function(num) {           14
//     return num ** 2;
// };
// console.log(square(5));


// function applyToEach(arr, callback) {                15
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// function double(x) {
//     console.log(x * 2);
// }
// let numbers = [3, 6, 9];
// applyToEach(numbers, double);  


// function factorial_number(n) {                   16
//     let factorial = 1;  
//     for (let i = 1; i <= n; i++) {
//         factorial *= i;  
//     }
//     return factorial;
// }

// console.log(factorial_number(5));



// (function() {                                  17            
//     console.log("Hello, Node.js!");
// })();

// let arr = ["banana", "apple", "cherry", "date"];             18
// arr.sort((a, b) => a.localeCompare(b));
// console.log(arr);


// function createAdder(x) {                 19
//     return function(num) {
//       return num + x;
//     };
//   }
// const add = createAdder(5);
// console.log(add(3));  
// console.log(add(10)); 
  

// console.log("Global",  this);           20
// function showThis() {
//     console.log("Inside", this);
// }

// showThis();


// const person = {                       21    
//     name: "John",
//     getName: function() {
//         return this.name;
//     }
//   };
// console.log(person.getName());


// const person = {                          22          
//     name: "John",
//     age: 30,
//     getNameRegular: function() {
//       console.log("function", this.name);  
//     },
//     getNameArrow: () => {
//       console.log("Arrow function", this.name);  
//     }
//   };
// person.getNameRegular(); 
// person.getNameArrow();


// const person = {                          23       
//     name: "John",
//     outerFunction: function() {
//       console.log("Outer: ", this.name); 
    
//       function innerFunction() {
//         console.log(this);
//         console.log("Inner: ", this.name);
//       }
//       innerFunction(); 
//     }
//   };
// person.outerFunction();

// function outerFunction() {                         
//     this.outerValue = "Outer";
//     console.log(this.outerValue); 
//     function innerFunction() {
//         this.innerValue = "Inner";
//         console.log(this.innerValue); // 
//         console.log(this.outerValue);
//     }
//     innerFunction();
// }
// const obj = new outerFunction(); 


// const calculator = {
//     let = result 0;                      
    
//     add: function(value) {
//         this.result += value;  
//         return this.result;    
//     },

//     subtract: function(value) {
//         this.result -= value;  
//         return this.result;    
//     }
// };
// console.log(calculator.add(5));      
// console.log(calculator.add(10));      
// console.log(calculator.subtract(3));  


// const counter = {                        26
//     value: 0,
//     increment: function() {
//       console.log(this); 
//       this.value++;
//       console.log("Value:", this.value);
//     }
//   };
  
//   counter.increment();

// const counter = {                      27
//     value: 0,
//     increment: function() {
//       const arrowFunction = () => {
//         console.log(this);  
//         this.value++;
//         console.log("Value:", this.value);
//       };
//       arrowFunction();
//     }
//   };
// counter.increment();


// function normalFunction() {           28
//     console.log(this); 
//   }
//   normalFunction();  
  
//   function strictFunction() {
//     "use strict";
//     console.log(this);  
//   }
//   strictFunction();


// const user = {                             29
//     name: "Alice",
//     greet: function() {
//       const arrowFunction = () => {
//         console.log(this.name);  
//       };
//       arrowFunction();
//     }
//   };
// user.greet();



function greet(name, callback) {
  setTimeout(function() {
    console.log("Hello, " + name);
    callback(); 
  }, 1000);
}
function finishGreeting() {
  console.log("Greeting finished");
}
greet("John", finishGreeting);
