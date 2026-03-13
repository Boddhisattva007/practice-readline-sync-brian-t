// Questions:
// 1. Any piece of data that JavaScript can store, process, and interact with is called what?: (value)
// 2. While primitives hold single values, _______ types can store collections of data or more complex entities: (complex)
// 3. What variable naming convention should be followed in JavaScript? Hint: userName: (camelCase)
// 4. What keyword is often used in JavaScript for variable declaration? (let)
// 5. _______ conversion is when a developer takes control and intentionally converts a value from one type to another 
// using a JavaScript method. Please select from one of the following:
// 1. Explicit 2.Implicit (1)

//import readline-sync and assign to variable userInput
const userInput = require("readline-sync");
console.log("");

//asking for user's name
let name = userInput.question("Please Enter Your Name: ");
console.log("");
console.log("Hello " + name + "!");
console.log("");

//Test Begins:
console.log("The following questions will test your understanding of Values, Data Types, and Operations: \n\n" +  
    "Let's Begin!");
console.log("");

//Question 1:
let answerQuestionOne = userInput.question("1. Any piece of data that JavaScript can store, process, and interact with is called what?: ");
console.log("");

//Question 2:
let answerQuestionTwo = userInput.question("2. While primitives hold single values, _______ types can store collections of data and more complex entities.: ");
console.log("");

//Question 3:
let answerQuestionThree = userInput.question("3. What variable naming convention should be followed in JavaScript? Hint: userName: ");
console.log("");

//Question 4:
let answerQuestionFour = userInput.question("4. What keyword is often used in JavaScript for variable declaration? ");
console.log("");

//Question 5:
let answerQuestionFive = userInput.questionInt("5. _______ conversion is when a developer takes control and intentionally converts a value from one type\n" + 
    "to another using a JavaScript method. Please select from one of the following: \n" + 
    "1. Explicit 2.Implicit : ");
console.log("");

//Return answers back to the user
console.log("Thank You " + name + (". ") + "The answers you chose for questions 1 - 5 are listed below: ");
console.log("");
console.log("1. " + answerQuestionOne);
console.log("2. " + answerQuestionTwo);
console.log("3. " + answerQuestionThree);
console.log("4. " + answerQuestionFour);
console.log("5. " + answerQuestionFive);
console.log("");
console.log("Your answers have been recorded. Have a great day! ");
console.log("");
