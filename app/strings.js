stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    var chars = str.split("");
    var diff = [];
    var reducedString = "";
    var letterCounter = 0;
    var tmpDiff = [];

    for (let index = 0; index < chars.length; index++) {
      const element = chars[index];

      if(tmpDiff.includes(element)){
        letterCounter += 1;
      }else{
        letterCounter = 0;
        tmpDiff = [];
      }
      if(letterCounter < amount){
        diff.push(element);
        tmpDiff.push(element);
      }
    }

    for (let indexLetter = 0; indexLetter < diff.length; indexLetter++) {
      const letter = diff[indexLetter];
      reducedString += ""+letter;
    }

    return reducedString;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    var chars = str.split("");
    chars.reverse();
    var reversedString = "";

    for (let indexLetter = 0; indexLetter < chars.length; indexLetter++) {
      const letter = chars[indexLetter];
      reversedString += ""+letter;
    }

    return reversedString;
  },
};
