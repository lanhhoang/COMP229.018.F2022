// import { halfOf, multiply } from "./lib.js";

// console.log("halfOf: " + halfOf(84));
// console.log("multiply: " + multiply(84, 2));

// import doSomething from "./lib.js";

// doSomething();

import { flag, touch } from "./validator.js";

console.log(flag); // false
touch(); // change to true
console.log(flag); // true
flag = false; // change to false
console.log(flag); // error because when import, flag is binding to flag of validator.js, not a value