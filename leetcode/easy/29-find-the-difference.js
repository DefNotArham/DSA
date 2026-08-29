var findTheDifference = function (s, t) {
  const sArray = s.split("");
  const tArray = t.split("");

  for (const tLetter of tArray) {
    const sCount = sArray.filter((letter) => letter === tLetter).length;
    const tCount = tArray.filter((letter) => letter === tLetter).length;

    if (tCount > sCount) {
      return tLetter;
    }
  }
};
