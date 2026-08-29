var numJewelsInStones = function (jewels, stones) {
  const jewelsArray = jewels.split("");
  const stonesArray = stones.split("");
  let counter = 0;

  for (const stone of stonesArray) {
    if (jewelsArray.includes(stone)) {
      counter++;
    }
  }

  return counter;
};
