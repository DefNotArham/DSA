var defangIPaddr = function (address) {
  const addressArray = address.split("");

  for (let i = 0; i < address.length; i++) {
    if (addressArray[i] === ".") {
      addressArray[i] = "[.]";
    }
  }

  return String(addressArray.join(""));
};
