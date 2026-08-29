const restoreString = function (s, indices) {
  const stringArray = [...s];
  const result = [];

  for (let i = 0; i < stringArray.length; i++) {
    result[indices[i]] = stringArray[i];
  }

  return result.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
