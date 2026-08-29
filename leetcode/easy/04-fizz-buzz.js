const fizzBuzz = function (n) {
  let splitArray = [...Array(n)].map((_, index) => index + 1);
  let stringArray = splitArray.map(String);

  for (let i = 0; i < stringArray.length; i++) {
    if (Number(stringArray[i]) % 3 === 0 && Number(stringArray[i]) % 5 === 0) {
      stringArray[i] = "FizzBuzz";
    } else if (Number(stringArray[i]) % 3 === 0) {
      stringArray[i] = "Fizz";
    } else if (Number(stringArray[i]) % 5 === 0) {
      stringArray[i] = "Buzz";
    }
  }

  return stringArray;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
