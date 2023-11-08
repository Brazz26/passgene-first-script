var generateBtn = document.querySelector("#generate");

function generatePassword() {
   
    var password = "";
    var possibleChars = "";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var capChar = lowercaseChars.toUpperCase("");
    var integers = 123456789;
    //var SpecialChar = "!#$%&'()*+-./:;<=>?@[]^_`{|}~";
    var lengthInput = "8";
    // inserted boolean below
    var hasLowercase = true
    var hasUppercase = true;
    var hasNumeric = true;
    var hasSpecialChars = true;

    //confirms below
    console.log("Would you like your password to include lowercase?")
    if (!hasLowercase || !hasUppercase) {
        alert("Choose at least one character type.");
        return;
    }

    if (hasLowercase) {
        possibleChars += lowercaseChars;
    } else if(hasUppercase) {
        possibleChars += Uppercase
    }

    if (!hasSpecialChars || !hasNumeric) {
        alert("Please choose at least one special character");
    }
    for (var i = 0; i < lengthInput; i++) {
        var random = Math.floor(Math.random() * lowercaseChars.length);
        password += possibleChars[random];
    }
    console.log
    return "password";
}


console.log("result");



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

