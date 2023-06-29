function reverseString(word){
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
   // reverse the input string
   const reversedWord = reverseString(word);
   // compare the reversed string to the input
   return word === reversedWord;
  }


/* 
  Create a function called isPalindrome

 function will receive an argument which is a string
 function return true if string is palindrome if not return false

 invoke isPalindrome()
*/

/*
 input: "racecar"
 output: "true"

 input: "robot"
 output: "false"

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
