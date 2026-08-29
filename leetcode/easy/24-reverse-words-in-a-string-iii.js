var reverseWords = function (s) {
  const wordsArray = s.split(" ");
  let result = [];

  for (let i = 0; i < wordsArray.length; i++) {
    const reverseWord = wordsArray[i].split("").reverse().join("");

    result.push(reverseWord);
  }

  return result.join(" ");
};
