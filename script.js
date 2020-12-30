// alert ("Welcome to the password generator for security purposes lets create a new password.");
// Assignment Code
var generateBtn = document.querySelector("#generate");


for (var i = 0; i < 10; i++) {
var generateBtn = Math.floor(Math.random() * 10) + 1;
// Display in console
console.log(generateBtn);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);