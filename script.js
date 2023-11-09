var generateBtn = document.querySelector("#generate");

function generatePassword() {
   
    var password = " ";
    var possibleChars = " ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var Numeric = ("0","1","2","3","4","5","6","7", "8","9");
    var SpecialChar = ["!","#","$",".","%","&","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
    var lengthInput = "8";
    
    // inserted boolean below
    var hasLowercase = true
    var hasUppercase = true;
    var hasNumeric = true;
    var hasSpecialChars = true;

    //confirms below
    
    if (!hasLowercase || !hasUppercase) {
        alert("Choose at least one character type.");
        return;
    }
    var hasLowercase = window.confirm("Would you like to include lowercase characters?");
    if (hasLowercase) {
        possibleChars += lowercaseChars;
    } 
    var hasUppercase = window.confirm("Would you like to include capital letters?");
    if(hasUppercase) {
        possibleChars += Uppercase
    }

    var hasNumeric = window.confirm("Would you like to include numbers?");
    if(hasNumeric) {
        possibleChars += Numeric
    }
    var hasSpecialChars = window.confirm("Would you like to include special characters?")
    if(hasSpecialChars) {
        possibleChars += SpecialChar
    }

//if (window.confirm("Would you like to have special characters?"))
   // if (!hasSpecialChars || !hasNumeric) {
   //     alert("Please choose at least one special character");
   // } else if(hasNumeric) {
   //     possibleChars += Numeric
    //}

    for (var i = 0; i < lengthInput; i++) {
        var random = Math.floor(Math.random() * lowercaseChars.length);
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

