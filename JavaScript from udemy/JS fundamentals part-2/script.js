'use strict';
/* INTRO
let hasLicenseBeanGiven = true;
const canDrive = true;

if (canDrive) hasLicenseBeanGiven = true;
if (hasLicenseBeanGiven) console.log(`he/she can drive`);
*/

/*================================== FUNCTIONS ==================================
function logger() {
  console.log(`my name is maulik`);
}

logger();
logger();
logger();

function foodProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `Juice with ${apple} apple and ${orange} orange`;
  return juice;
}

foodProcessor(5, 5);
console.log(foodProcessor(5, 5));
const mixJuice = foodProcessor(5, 7);
console.log(mixJuice);

function calssStrength(boy, girl) {
  return `class has ${boy} boys and ${girl} girls`;
}

const howMany = calssStrength(25, 30);
console.log(howMany);
*/

/*====================== FunctionDeclarations vs. Expression =======================
// Declaration
function calAge1(birthyear) {
  // const age = 2023 - birthyear;
  // return age;

  return 2023 - birthyear;
}

const age1 = calAge1(1996);
console.log(age1);

// Expression
const calAge2 = function (birthyear) {
  return 2023 - birthyear;
};
const age2 = calAge2(1995);
console.log(age2);
*/

/*============================ Arrow Function ==============================
const calAge3 = (birthyear) => 2023 - birthyear;
const age3 = calAge3(1996);
console.log(age3);

const retairYear = (birthyear, firstName) => {
  const age = 2023 - birthyear;
  const retaor = 65 - age;

  return `${firstName} retires in ${retaor} years`;
};

console.log(retairYear(1996, 'Maulik'));
console.log(retairYear(1995, 'Sweta'));
console.log(retairYear(1970, 'Rajendra'));
*/

/*============================== Functions calling other Functions ========================
function cutToPic(fruit) {
  return fruit * 6;
}

function foodProcessor(apple, orange) {
  // console.log(apple, orange);
  const applePices = cutToPic(apple);
  const orangePices = cutToPic(orange);
  // const juice = `Juice with ${apple} apple and ${orange} orange`;
  const juice = `mix juice with ${applePices} pieces of apple and ${orangePices} pieces of Oranges`;
  return juice;
}

foodProcessor(5, 5);
console.log(foodProcessor(5, 5));
const mixJuice = foodProcessor(5, 7);
console.log(mixJuice);
*/

/*============================== Reviewing function ===================================
const calAge3 = function (birthyear) {
  return 2023 - birthyear;
};
const age3 = calAge3(1996);
console.log(age3);

const retairYear = function (birthyear, firstName) {
  const age = calAge3(birthyear);
  const retaor = 65 - age;

  return `${firstName} retires in ${retaor} years`;
};

console.log(retairYear(1996, 'Maulik'));
console.log(retairYear(1995, 'Sweta'));
console.log(retairYear(1970, 'Rajendra'));
console.log(retairYear(1940, 'Sita'));
*/

/*================================ Codding Challenge #1 ===============================
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK �
console.log(`challenge #1`);
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

//using function
const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDol = calAverage(85, 54, 41);
const avgkoa = calAverage(23, 333, 32);

const checkWinner = function () {
  if (avgDol >= 2 * avgkoa) {
    console.log(`Dol wins!`);
  } else if (avgkoa >= 2 * avgDol) {
    console.log(`koa wins!`);
  } else {
    console.log(`both are loosers!`);
  }
  return;
};

checkWinner();
*/

/*==================== Introduction to Arrays ====================
const friends = ['Abhi', 'Ahemad', 'Zill'];
console.log(friends);

const years = new Array(1996, 1995, 1998);
console.log(years);

console.log(friends.length);
console.log(friends[1]);
console.log(years[3]);
console.log(years[2]);
console.log(friends[friends.length - 1]); //second last element

friends[2] = 'Avas';
console.log(friends[2]);

const calAge = function (birthyear) {
  return 2023 - birthyear;
};

const yearsOldSingle = calAge(years[0]);
console.log(yearsOldSingle);

const yearsOld = [calAge(years[0]), calAge(years[1])];
console.log(yearsOld);
*/

/*=================== Basic Array Operations(Methods) ===========================
const friends = ['Abhi', 'Ahemad', 'Zill'];
// add element at the End
friends.push('Prabhas');
console.log(friends, friends.length);
// add element at the Start of array
friends.unshift('Pitter');
console.log(friends, friends.length);
// remove last element
friends.pop();
console.log(friends, friends.length);
// remove First element
friends.shift();
console.log(friends, friends.length);
//find index of value
console.log(friends.indexOf('Abhi'));
// check if checking element is present in array or not
console.log(friends.includes('Zill'));
if (friends.includes('axay')) {
  console.log(`u have friend named Axay`);
} else {
  console.log(`u do not have friends name Axay`);
}
*/

/*=================== Coding Challenge #2 ==========================
// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK �

// let tip = 0; // need to define because it will use to store value

// const calcTip = function (bill) {
//   const tipValue = bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
//   console.log(tip);
// };

// calcTip(100);

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(tips);
// console.log(tips.indexOf(18.75), tips.indexOf(100));
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
// console.log(total);

// const totalNew = [bills[0] + tips[0], bills[1] + tips[1]];
// console.log(totalNew);
// Why Upper method is not working?

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill; //ternary operator (alternate to if/else - smaller equations! )
  return tip;
}
const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
console.log(total);
*/

/*============================ introduction to Object =================================
const Maulik = {
  firstName: 'Maulik',
  lastName: 'Patel',
  age: 2023 - 1996,
  job: 'Web Developer',
  friends: ['Abhi', 'Ahemad', 'Zill'],
};

console.log(Maulik);

// ============================= Dot vs. Bracket Notation ==============================
console.log(Maulik.firstName);
console.log(Maulik['lastName']);

const nameKey = 'Name';
console.log(Maulik['first' + nameKey]);
console.log(Maulik['last' + nameKey]);

// .console.log(Maulik.'last' + nameKey) // Dot notation does not work here for more functionality

// const findInfo = prompt(`What do you want to know about Maulik?
// Choose between his fo firstName, lastName or age`);
// console.log(Maulik[findInfo]);

Maulik.location = 'India';
console.log(Maulik);

console.log(`Maulik has ${Maulik['friends'].length} friends and first name on this list ie ${Maulik['friends'][0]}.`);
*/

/* ========================== Object Methods =========================================
const Maulik = {
  firstName: 'Maulik',
  lastName: 'Patel',
  birthyear: 1996,
  age: 2023 - 1996,
  job: 'Web Developer',
  friends: ['Abhi', 'Ahemad', 'Zill'],

  // calAge: function (birthyear) {
  //   return 2023 - birthyear;
  // },

  calAge: function () {
    return 2023 - this.birthyear;
  },
};

console.log(Maulik.calAge());
console.log(Maulik.calAge());
*/

/*========================== Coding Challenge 3 ====================================
// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

const mark = {
  fullName: 'Mark',
  mass: 78,
  height: 1.69,

  calBMI: function () {
    return this.mass / (this.height * this.height);
  },
};
const john = {
  fullName: 'John',
  mass: 92,
  height: 1.95,
  calBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

console.log(mark.calBMI());
console.log(john.calBMI());

const heigherBMI = function () {
  if (mark.calBMI() > john.calBMI()) {
    console.log(`${mark.fullName} has higher BMI ${mark.calBMI()} than John's BMI ${john.calBMI()}`);
  } else {
    console.log(`${john.fullName} has higher BMI ${john.calBMI()} than mark (${mark.calBMI()})`);
  }
};

heigherBMI();
*/

/* ============================= Iteration: the for loop ==============================*/
console.log('lift weight to repeat time 1');
console.log('lift weight to repeat time 2');
console.log('lift weight to repeat time 3');
console.log('lift weight to repeat time 4');
console.log('lift weight to repeat time 5');
console.log('lift weight to repeat time 6');
console.log('lift weight to repeat time 7');
console.log('lift weight to repeat time 8');
console.log('lift weight to repeat time 9');
console.log('lift weight to repeat time 10');
console.log('lift weight to repeat time 11');
console.log('lift weight to repeat time 12');

// for loop
console.log(`Using For loop`);
for (let rep = 1; rep <= 22; rep++) {
  console.log(`lift weight to repeat time ${rep}`);
}
