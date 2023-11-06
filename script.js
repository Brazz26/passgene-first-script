// Assignment code here
function generatePassword() {
    // ADD CODE HERE
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var chars = "abcde";
var result = "";

for (var i = 0; i < 3; i++) {
  var random = Math.floor(Math.random() * chars.length);
  result += chars[random];
}

console.log(result); // Theoretical output - "cae";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);