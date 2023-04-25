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

/*============================== Reviewing function ===================================*/
const calAge3 = (birthyear) => 2023 - birthyear;
const age3 = calAge3(1996);
console.log(age3);

const retairYear = function (birthyear, firstName) {
  const age = 2023 - birthyear;
  const retaor = 65 - age;

  return `${firstName} retires in ${retaor} years`;
};

console.log(retairYear(1996, 'Maulik'));
console.log(retairYear(1995, 'Sweta'));
console.log(retairYear(1970, 'Rajendra'));
