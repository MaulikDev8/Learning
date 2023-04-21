/*

console.log('hello!');
// alert('what r u doing?');
45 - 45;
console.log(5 - 45);

// ========= Value and Variables ===============
let firstName = 'Maulik';
console.log(firstName);

let myFirstJob = 'Front-End developer';
let myNewJob = 'HTML developer';
console.log(myFirstJob, myNewJob);

// Practice
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = 'India';
let continent = 'asia';
let population = 1200;
console.log(country, continent, population);

*/

/*
// =============== Data Types ================
console.log(true);

let jsBeFun = true;
console.log(jsBeFun);

console.log(typeof jsBeFun);

let age = 26;
console.log(typeof age);
console.log(typeof 26);
age = 'twenty-six';
console.log(typeof age);

let currentYear;
console.log(currentYear);
*/

/*
// =============== let, const, and var ============

let age = 26;
const birthYear = 1996;
*/

/*
// ============= Basic Operators ============
const firstName = 'Maulik';
const lastName = 'patel';
const space = ' ';
console.log(firstName + lastName);
console.log(firstName + space + lastName);

const maulikAge = 26;
const akshayAge = 24;
const swetaAge = 26;
console.log(maulikAge > akshayAge);
console.log(maulikAge < akshayAge);
console.log(maulikAge == akshayAge);
console.log(swetaAge >= maulikAge);
*/

/*
============ Operators Precedence ===============
const now = 2023;
const ageMaulik = now - 1996;
const ageSweta = now - 1995;
console.log(ageMaulik, ageSweta);

const firstName = 'Maulik';
const lastName = 'Patel';
console.log(firstName, lastName);
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);
*/

/*
// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

console.log('Codding Challenge #1');
let weightMark, weightJohn, heightMark, heightJohn;
// bmi = mass / height ** 2;
weightMark = 78;
weightJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;
let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / heightJohn ** 2;
console.log('Mark bmi = ', bmiMark);
console.log('John bmi = ', bmiJohn);

console.log('comparing bmi : John Higher?', bmiJohn > bmiMark);
*/

/* 
=========== String and Template literals ==========
const firstName = 'maulik';
const lastName = 'Patel';
const age = 26;

console.log("i'm " + firstName + ' ' + lastName + " and I'm " + age + 'year old');

console.log(`I'm $(firstName)`);

const Template = `i"m Maulik
Patel
and 
well`;
console.log(Template);
*/

/*
============== if / else statement =============
const age = 16;

if (age >= 18) {
  console.log('can start driving');
} else {
  console.log('wait until you are 18');
}

let century;
const birthYear = 1996;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/* 
======================== codding challenge #2 ====================== 
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
console.log('Codding Challenge #2');
let weightMark, weightJohn, heightMark, heightJohn;
// bmi = mass / height ** 2;
weightMark = 78;
weightJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;
let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / heightJohn ** 2;
console.log('Mark bmi = ', bmiMark);
console.log('John bmi = ', bmiJohn);

console.log('comparing bmi : John Higher?', bmiJohn > bmiMark);
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn})is higher than Mark's (${bmiMark})!`);
}
*/

/*
==================== Type conversion and coercion ===================
console.log(typeof 23);
console.log(typeof String(23));
console.log(typeof 'coe');
console.log(typeof Number('coe'));
// console.log(typeof Number(coe)); Will give error
*/

/*
==================== Truthy and Falsy values =========================
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('mpe'));

const money = 100;
if (money > 0) {
  console.log(`enjoy, but don't spend it all!`);
} else {
  console.log(`get job as soon as possible`);
}

let height = 0;
if (height) {
  console.log(`height is defined`);
} else {
  console.log(`it's not defined`);
}
*/

/*
================= Equality operators: == vs. === ==============
const age = 18;
if (age === 18) console.log(`u become adult`);
*/

/*
===================== Logical Operators ====================
*/
