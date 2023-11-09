var generateBtn = document.querySelector("#generate");

function generatePassword() {
   
    var password = " ";
    var possibleChars = " ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var Numeric = "0123456789";
    var SpecialChar = "!@#$%^&*()+={}[]:;<>,./?|~";
    var lengthInput = window.prompt("Please choose character length no less than 8, no more than 128");
    if (lengthInput < 8 || lengthInput > 128) {
        alert("Please choose a number between 8 and 128")
    }
    
   

    //confirms below
    
    
    var hasLowercase = window.confirm("Would you like to include lowercase characters?");
    if (hasLowercase) {
        possibleChars += lowercaseChars;
    } 
    var hasUppercase = window.confirm("Would you like to include capital letters?");
    if (hasUppercase) {
        possibleChars += Uppercase;
    }
    if (!hasLowercase && !hasUppercase) {
        alert("Please choose at least one character type.");
        return null;
    }
    var hasNumeric = window.confirm("Would you like to include numbers?");
    if (hasNumeric) {
        possibleChars += Numeric;
    }
    var hasSpecialChars = window.confirm("Would you like to include special characters?")
    if (hasSpecialChars) {
        possibleChars += SpecialChar
    }


    if (!hasSpecialChars && !hasNumeric) {
        alert("Please choose at least one special character");
        return null;
    }

    for (var i = 0; i < lengthInput; i++) {
        var random = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[random];
    }
    console.log
    return password;
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

