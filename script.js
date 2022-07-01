var specialChar = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//invokes generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passwordCriteria() {
 var pwLength = parseInt(prompt("Enter desired password character length: between 8 and 128."));
 if (pwLength < 8 || pwLength > 128) {
 alert ("Please select a number between 8 and 128");
return null;
 }

var inclSpecialChar = confirm("Include Special Characters?");
var inclNumbers = confirm("Include numbers?");
var inclUpper = confirm("Include uppercase letters?");
var inclLower = confirm("Include lowercase letters?");



}

//invokes passwordCriteria function
function generatePassword() {
  passwordCriteria();
}

// Add event listener to generate button
//invokes writePassword function
generateBtn.addEventListener("click", writePassword);
