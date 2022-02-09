// freeCodeCamp project
// Solution for Roman Numeral Converter
// Author: Felipe Meneses Graca

// Converts integer to roman
function convertToRoman(num) {

    // turn num to string, turn string to array, reverse to facilitate conversion using switch and array index
    let arr = num.toString().split("").reverse();
   
    // check unit (converted arr first element), switch numeral to roman, return unit
    let unit = [];
    switch(arr[0]) {
      case '1':
        unit = 'I';
        break;
      case '2':
        unit = 'II';
        break;
      case '3':
        unit = 'III';
        break;
      case '4':
        unit = 'IV';
        break;
      case '5':
        unit = 'V';
        break;
      case '6':
        unit = 'VI';
        break;
      case '7':
        unit = 'VII';
        break;
      case '8':
        unit = 'VIII';
        break;
      case '9':
        unit = 'IX';
        break;
    }
  
    // check tens (converted arr second element, if exists), switch numeral to roman, return tens
    let tens = [];
    switch(arr[1]) {
      case '1':
        tens = 'X';
        break;
      case '2':
        tens = 'XX';
        break;
      case '3':
        tens = 'XXX';
        break;
      case '4':
        tens = 'XL';
        break;
      case '5':
        tens = 'L';
        break;
      case '6':
        tens = 'LX';
        break;
      case '7':
        tens = 'LXX';
        break;
      case '8':
        tens = 'LXXX';
        break;
      case '9':
        tens = 'XC';
        break;
    }
    
    // check hundreds (converted arr third element, if exists), switch numeral to roman, return hundreds
    let hundreds = [];
    switch(arr[2]) {
      case '1':
        hundreds = 'C';
        break;
      case '2':
        hundreds = 'CC';
        break;
      case '3':
        hundreds = 'CCC';
        break;
      case '4':
        hundreds = 'CD';
        break;
      case '5':
        hundreds = 'D';
        break;
      case '6':
        hundreds = 'DC';
        break;
      case '7':
        hundreds = 'DCC';
        break;
      case '8':
        hundreds = 'DCCC';
        break;
      case '9':
        hundreds = 'CM';
        break;
    }
    
    // check thousands (converted arr third element, if exists), switch numeral to roman, return thousands
    let thousands = [];
    switch(arr[3]) {
      case '1':
        thousands = 'M';
        break;
      case '2':
        thousands = 'MM';
        break;
      case '3':
        thousands = 'MMM';
        break;
    }
  
    //add thousands + hundreds + tens + units
    let roman = thousands + hundreds + tens + unit;
    return roman;
  }
  
  console.log(convertToRoman(1996));