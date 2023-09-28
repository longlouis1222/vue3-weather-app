export const fnMixins = {
  convertToDegC(deg) {
    return ((deg - 32) * 5) / 9;
  },

  splitWithCapitalize(str) {
    let upperCaseLetters = [...str];
    for (let i = 0; i < str.length; i++) {
      // check if the character is not a number
      if (isNaN(str[i]) * 1) {
        // check if the character is uppercase adn push
        // to the uppercase array if it is
        if (str[i] == str[i].toUpperCase()) {
          upperCaseLetters[i] = ' ' + str[i].toUpperCase();
        }
      }
    }
    return upperCaseLetters.join("");
  },
};
