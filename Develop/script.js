// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  // Define character sets
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  const numericChars = "0123456789";

  // Ask user for password criteria
  const length = prompt ("Please enter password length, usually between 8 and 128 characters:");
  if (!length || isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return "";
  }

  const includeLowercase = confirm("Would you like to include lowercase letters?");
  const includeUppercase = confirm("Would you like to include uppercase letters?");
  const includeSpecial = confirm("Would you like to include special characters?");
  const includeNumeric = confirm("Would you like to include numbers?");

  
  let charset = "";
  if (includeLowercase) charset += lowercaseChars;
  if (includeUppercase) charset += uppercaseChars;
  if (includeNumeric) charset += numericChars;
  if (includeSpecial) charset += specialChars;

  if (charset === "") {
    alert("Select atleast one character type.");
    return "";
  }

  // Generate password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

