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

/*
===================== Codding challenge #3 ========================
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

console.log(`challenge #3`);
let dAvg = (70 + 112 + 101) / 3;
let kAvg = (70 + 95 + 106) / 3;

console.log(dAvg, kAvg);

if (dAvg > kAvg && dAvg >= 100) {
  console.log(`D wins!`);
} else if (kAvg > dAvg && kAvg >= 100) {
  console.log(`K wins!`);
} else if (kAvg === dAvg && kAvg >= 100 && dAvg >= 100) {
  console.log(`it is a draw!`);
} else {
  console.log(`both are looser`);
}
*/

/*
======================== Switch Statement ==============================

const day = 'monday';
switch (day) {
  case 'monday':
    console.log(`monday today`);
    break;
  case 'tuesday':
    console.log(`code today`);
    break;
  default:
    console.log(`no day today!`);
}
*/

/*
====================== Statement and Expression ===========================

3 + 4;
1996;
('Maulik');

if (26 > 27) {
  console.log(`I'm younger`);
  const str = '27 is bigger';
}

const me = 'Maulik';

console.log(`i'm ${1996 - 2023} and ${if (26 > 27) {
  console.log(`I'm younger`);
  const str = '27 is bigger';
}}`); 😅
*/

/*
================= conditional(Ternary) operators ============================

const age = 14;
age >= 18 ? console.log(`you can drink🍷`) : console.log(`Grow up first`);

const str1 = age >= 18 ? console.log(`you can drink🍷`) : console.log(`Grow up first`);
const str2 = age >= 18 ? 'drink' : 'no';

console.log(str2);
*/

/*
======================= codding challenge #4 ========================

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

let value = 430;
let tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
console.log(value, tip);
console.log(`The bill was ${value}, the tip was ${tip}, and the total value ${value + tip}`);
*/
