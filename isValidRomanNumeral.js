function isValidRomanNumeral(str) {
  if (typeof str !== 'string' || !str) return false;
  
  // option 1
  var regex = /^M?M?M?(CM|CD|D?C?C?C?)(XC|XL|L?X?X?X?)(IX|IV|V?I?I?I?)$/i;
  
  // option 2
  // var regex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
  
  return regex.test(str);
}

module.exports = {
  isValidRomanNumeral
};