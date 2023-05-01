'strict';
console.log(`maylik`);

const myName = function () {
  console.log(`mow`);
};

myName();

const myName2 = (nameFirst) => console.log(`now`);
myName2();

// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// const newnumbers = [...numbers, 5];
// console.log(newnumbers);

function transformToObjects(numbers) {
  return numbers.map(function (num) {
    return { val: num };
  });
}

transformToObjects();
