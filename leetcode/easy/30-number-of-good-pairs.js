var numIdenticalPairs = function (nums) {
  let goodPairsCounter = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        goodPairsCounter += 1;
      }
    }
  }

  return goodPairsCounter;
};
