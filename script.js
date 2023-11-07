var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // ADD CODE HERE
    var password = "";
    // Get references to the #generate element
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz" 
    var uppercaseChars = "";
    var numeric = 123456789;
    var specialChar = "!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,],^,_,`,{,|,},~,";
    var lengthInput = "12";
    var hasUppercase = true;
    var hasNumeric = false;
    var hasLowercase = false;

for (var i = 0; i < lengthInput; i++) {
  var random = Math.floor(Math.random() * chars.length);
  result += chars[random];
} 
console.log
    return "password";
}

console.log(result); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);