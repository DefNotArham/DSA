const smallerNumbersThanCurrent = function (nums) {
  let smallerNumCounts = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNumSmallCount = 0;

    for (j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        currentNumSmallCount += 1;
      }
    }
    smallerNumCounts.push(currentNumSmallCount);
  }

  return smallerNumCounts;
};
