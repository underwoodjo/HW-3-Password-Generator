// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("the button clicks")

 //Password length 8-28
 var passwordLength = prompt('Please choose a length of at least 8 characters and no more than 128 characters')
 if (passwordLength <8) {
  alert ("Please enter a number between 8 and 28");
  
 } else (passwordLength >28) {
  alert ("Please enter a number between 8 and 28");
  
 }

 //add lowercase, uppercase, numbers, and special characters
 var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
 var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var specialCharacters = ['!', '@', '#', '$','%', '^', '&', '*'];

 //Input should be validated

 //Display password to page
 //Display password to page
 return "generated password"

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
