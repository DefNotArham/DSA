var concatWithReverse = function (nums) {
  const reverseArray = nums.toReversed();

  return [...nums, ...reverseArray];
};
