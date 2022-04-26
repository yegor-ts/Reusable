'use strict';

const rangeOdd = (start, end) => {
  if (start > end) return [];
  const nums = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) nums.push(i);
  }
  return nums;
};

module.exports = { rangeOdd };
