function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/gi;
  return regex.test(str);
}

console.log(telephoneCheck("(6054756961)"));
