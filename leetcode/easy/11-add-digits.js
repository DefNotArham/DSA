var addDigits = function (num) {
  while (num >= 10) {
    const numString = String(num);
    const splitString = numString.split("");

    let sum = 0;

    for (let i = 0; i < splitString.length; i++) {
      sum = sum + Number(splitString[i]);
    }

    num = sum;
  }

  return num;
};

console.log(addDigits(11));
