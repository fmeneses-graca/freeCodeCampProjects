// freeCodeCamp project
// Solution for Palindrome Checker
// Author: Felipe Meneses Graca

// Checks if string argument is a palindrome and return boolean result
function palindromeChecker(str) {

    //create temporary variable newStr to store altered string
    //turn to lower case
    //remove all non-alphanumeric characters using replace(regex, "")
    //split to turn newStr into array of characters
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/gi,"").split("")
  
    //separate array in half, reverse the secondHalf, join to turn to string, and compare. If equal, return true, if different, return false.
    let half = newStr.length / 2
    let firstHalf = newStr.splice(0, half).join("")
    let secondHalf = newStr.splice(-half).reverse().join("")
  
    if (firstHalf === secondHalf) {
      return true
    }
    return false
  }
  
  console.log(palindromeChecker("racecar"))