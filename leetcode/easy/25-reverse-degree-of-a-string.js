var reverseDegree = function (s) {
  let total = 0;
  let ans = "zyxwvutsrqponmlkjihgfedcba";

  for (let i = 0; i < s.length; i++) {
    let value = ans.indexOf(s[i]) + 1;
    total += (i + 1) * value;
  }

  return total;
};
