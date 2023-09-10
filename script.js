// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("the button clicks")

 //Password length 8-128
 var passwordLength = prompt('Please choose a number between 8 and 128')
 if (passwordLength <8) {
  alert ("Please enter a number between 8 and 128");
  
 } else (passwordLength >128) 
  alert ("Please enter a number between 8 and 128");
 
 

 //add lowercase, uppercase, numbers, and special characters
 var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var specialCharacters = ['!', '@', '#', '$','%', '^', '&', '*'];

 //Input should be validated

 //Display password to page
 return "generated password";

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
