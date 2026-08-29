const isValid = function (s) {
  const stack = [];
  const parens = "() [] {}";

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    const Lastopen = stack[stack.length - 2];
    const Lastclose = stack[stack.length - 1];

    const paren = Lastopen + Lastclose;

    if (parens.includes(paren)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};
