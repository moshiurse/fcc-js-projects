function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

  var j = str.length-1;
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}



console.log(palindrome("abc@_cba"));
