const lengthOfLastWord = function (s) {
  const trimedStr = s.replace(/\s+/g, " ").trim();
  const splitStr = trimedStr.split(" ");
  const lastWord = splitStr[splitStr.length - 1];

  return lastWord.length;
};

console.log(lengthOfLastWord("  Hello World   "));
