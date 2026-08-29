const findPivotIndex = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const firstHalf = nums.slice(0, i);
    const secondHalf = nums.slice(i + 1);

    const firstHalfSum = firstHalf.reduce((t, c) => t + c, 0);
    const secondHalfSum = secondHalf.reduce((t, c) => t + c, 0);

    if (firstHalfSum === secondHalfSum) return i;
  }

  return -1;
};

console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
