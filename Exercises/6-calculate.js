'use strict';

const square = (n) => n * n;

const cube = (n) => n ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const nums = [];
  for (let i = 0; i <= 9; i++) {
    const n = average(square(i), cube(i));
    nums.push(n);
  }
  return nums;
};

module.exports = { square, cube, average, calculate };
