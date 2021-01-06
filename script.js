alert("Welcome to the password generator for security purposes let's create a new password.");

// The Password generator will provide a password with 8-128 characters based on criteria the user specifies.

//Assignment Code & Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

//Variables
var number = "0123456789";
var specialChar = "$#@%^+=!%&,*+-./<>?~;";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  // Repeat how many charactes the user will have  
  alert(`Your password will have ${confirmLength} characters`);

  // Set parameters of password 
  var confirmSpecialCharacter = confirm("Click ok to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click ok to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click ok to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click ok to confirm if you would like to include uppercase characters");

  // Loop if answer is outside the parameters 
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click ok to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click ok to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click ok to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click ok to confirm if you would like to include uppercase characters");
  }

  // Assign an action to the password parameters
  var passwordCharacters = []

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters += (specialChar)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters += (number)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters += (alphaLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters += (alphaUpper)
  }

  console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
