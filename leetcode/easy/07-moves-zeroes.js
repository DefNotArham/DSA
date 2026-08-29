const moveZeroes = function (nums) {
  let zeros = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros.push(nums[i]);
      nums.splice(i, 1);
    }
  }

  nums.push(...zeros);

  return nums;
};

console.log(moveZeroes([1, 0, 2, 0, 3]));
