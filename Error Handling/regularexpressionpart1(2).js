let re;
re = /hello/; // they are literal character 
re1 = /hello/i; // i = case insensitive. It does not care about capital or small character in comparison.
re2 = /hello/g; // g = global
// console.log(re);
// console.log(re.source);

// Evalaution Functions

// exec(): It is evalaution function and returns array, if it matches else returns null.It also tells us at which index it matches
// const result = re.exec('Hi Hello Uzair'); 
// console.log(result);
// console.log(result.index); // It also tells us at which index it matches
//====================================================================================
// test(): It returns true or false

// const result1 = re.test('Hello'); // returns false
// console.log(result1);
// const result2 = re1.test('Hello'); // returns true because we have used to case insensitive
// console.log(result2);

// match() - returns result array or null

// const str = 'Hello there';
// const result3 = str.match(re1);  // see difference replace re1 to re
// console.log(result3);

// ======================================================================================
// search() - returns index of the first match if not found returns -1
// const str = 'Brad hello There';
// const result = str.search(re); // it will tell index at which matches
// console.log(result);

//===================================================================================
// replace() - returns new String with some or all matches of a pattern
const str = 'hello There';
const newStr = str.replace(re, 'Hi'); // If matches then replace re to Hi
console.log(newStr);
