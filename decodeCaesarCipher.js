// freeCodeCamp project
// Solution for Caesars Cipher
// Author: Felipe Meneses Graca

// Decode Caesar Ciphered string
function decodeCaesarCipher(str) {
  
  //turn str to arr
  let arr = str.split("");

  //create two arrays of letters based in ROT13 cipher
  let firstArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
  let secondArr = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  //search and replace using for loop
  for(let i = 0; i < arr.length; i++) { //look into arr
    for(let j = 0; j < firstArr.length; j++) { //look into firstArr or secondArr
      if (arr[i] === firstArr[j]) { //if arr index match firstArr index
        arr[i] = secondArr[j]; //replace
      } else if (arr[i] === secondArr[j]) { //if arr index match secondArr index
        arr[i] = firstArr[j]; //replace
      }
    }
  }

  //return joined array
  return arr.join("");
}

console.log(decodeCaesarCipher("SERR PBQR PNZC"));