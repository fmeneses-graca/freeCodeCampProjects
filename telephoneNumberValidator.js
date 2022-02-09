// freeCodeCamp project
// Solution for Telephone Number Validator
// Author: Felipe Meneses Graca

// Validates telephone number and return boolean result 
function telephoneNumberValidator(str) {

    //create regex model
    let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
  
    //test if str matches regex
    return regex.test(str)
  }
  
  console.log(telephoneNumberValidator("(555)555-5555"));