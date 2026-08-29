const isAnagram = function (s, t) {
  const sorted = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");

  if (sorted(s) === sorted(t)) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
