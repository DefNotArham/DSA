var scoreOfString = function (s) {
  let ASCIIArray = [];

  for (let i = 0; i < s.length; i++) {
    const asciiValue = s[i].charCodeAt(0);
    ASCIIArray.push(asciiValue);
  }

  let result = 0;
  for (let i = 0; i < ASCIIArray.length - 1; i++) {
    let asciiVal = Math.abs(ASCIIArray[i] - ASCIIArray[i + 1]);
    result += asciiVal;
  }

  return result;
};
