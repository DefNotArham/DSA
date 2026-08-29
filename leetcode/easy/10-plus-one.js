const plusOne = function (digits) {
  const num = Number(digits.join(""));

  const numPlusOne = num + 1;

  return [...String(numPlusOne)].map(Number);
};

console.log(plusOne([1, 2, 3]));
