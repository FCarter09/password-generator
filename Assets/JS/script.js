// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()?><{}_+-[]=?";
var passwordCharacters = ""


function promptUpperCaseLetters() {
  var hasUpperCaseLetters = window.prompt('Do you want to use upper case letters? Enter "YES" or "NO" to choose.');

    if (hasUpperCaseLetters === 'YES') {
      console.log(hasUpperCaseLetters);
      // if yes, then add uppercase letters to potential password characters
      // var value = Math.floor(Math.random() * upperCaseLetters.length);
      passwordCharacters += upperCaseLetters
      console.log(passwordCharacters);

    } else if (hasUpperCaseLetters === 'NO') {
      console.log(hasUpperCaseLetters);
    }else {
        window.alert("You need to provide a valid answer! Please try again.");
        // use return to call it again and stop the rest of this function from running
        promptUpperCaseLetters();
    }
  
}

function  promptLowerCaseLetters() {
  var hasLowerCaseLetters = window.prompt('Do you want to use lower case letters? Enter "YES" or "NO" to choose.');

  if (hasLowerCaseLetters === 'YES') {
    console.log(hasLowerCaseLetters);
    // if yes, then add lowercase letters to potential password characters
    // var value = Math.floor(Math.random() * lowerCaseLetters.length);
    
    passwordCharacters += lowerCaseLetters
    console.log(passwordCharacters);

  } else if (hasLowerCaseLetters === 'NO') {
    console.log(hasLowerCaseLetters);
  }else {
      window.alert("You need to provide a valid answer! Please try again.");
      // use return to call it again and stop the rest of this function from running
      promptLowerCaseLetters();
  }

}

function promptNumbers() {
  var hasNumbers = window.prompt('Do you want to use numbers? Enter "YES" or "NO" to choose. ');
  
  if (hasNumbers === 'YES') {
    console.log(hasNumbers);
    // if yes, then add numbers to potential password characters
    // var value = Math.floor(Math.random() * numbers.length);
    passwordCharacters += numbers
    console.log(passwordCharacters);

  } else if (hasNumbers === 'NO') {
    console.log(hasNumbers);
  }else {
      window.alert("You need to provide a valid answer! Please try again.");
      // use return to call it again and stop the rest of this function from running
      promptNumbers();
  }

}

function promptSpecialCharacters() {
  var hasSpecialCharacters = window.prompt("Do you want to use special characters?");
   
  if (hasSpecialCharacters === 'YES') {
    console.log(hasSpecialCharacters);
    // if yes, then add special characters to potential password characters
    // var value = Math.floor(Math.random() * specialCharacters.length);
    passwordCharacters += specialCharacters
    console.log(passwordCharacters);

  } else if (hasSpecialCharacters === 'NO') {
    console.log(hasSpecialCharacters);
  }else {
      window.alert("You need to provide a valid answer! Please try again.");
      // use return to call it again and stop the rest of this function from running
      promptSpecialCharacters();
  }

}

// Write password to the #password input
function writePassword() {
  console.log('button clicked');
  var passwordLength = window.prompt('What is the length of your password? Must between "8" and "32" characters.')
  console.log(passwordLength);
  
  

  // validate password length
  if (passwordLength < 8 || passwordLength > 32) {
    window.alert('Password must have at least 8 but no more than 32 characters.')

    writePassword();

  } 

  // ask user what characters they want in password
  
  promptUpperCaseLetters();
  promptLowerCaseLetters();
  promptNumbers();
  promptSpecialCharacters();
  
  
  console.log('all password characters', passwordCharacters);

    var finalPassword = ""
  
    //loop
    for (var i = 0; i  <passwordLength; i++) {
      //get one random character from passwordCharacters
      var index = Math.floor(Math.random() * passwordCharacters.length);
      
      finalPassword += passwordCharacters[index]
      

    }

    // write final password on page
    var passwordText = document.querySelector("#password");

    passwordText.value = finalPassword;


}

 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

