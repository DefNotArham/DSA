var diagonalSum = function (mat) {
  let sum = 0;
  const n = mat.length;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - i - 1];
  }

  if (n % 2 != 0) {
    const mid = Math.floor(n / 2);
    sum -= mat[mid][mid];
  }

  return sum;
};
