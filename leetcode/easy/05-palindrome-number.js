const isPalindrome = function (x) {
  if (x < 0) return false;

  const str = String(x);
  const reverseStr = str.split("").reverse().join("");

  if (x === Number(reverseStr)) return true;

  return false;
};

console.log(isPalindrome(100));
console.log(isPalindrome(101));
