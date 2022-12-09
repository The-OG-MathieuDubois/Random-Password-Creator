var generateBtn = document.querySelector("#generate");

var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialList = "!@#$%^&*()_-+={}[];:'`~<>,.?/"
var numbersList = "0123456789";
var checkLength;
var checkUpper;
var checkLower;
var checkSpecial;
var checkNumerics;

function userQuestions() {
  var isValid = false;
  var userResponse={};
  do {
    var checkLength = prompt("Please enter a desired password length(Must be between 8 and 128 characters)");
    var checkUpper = confirm("Do you want to include upper case letters? (ex: ABC)");
    var checkLower = confirm("Do you want to include lower case letters? (ex: abc)");
    var checkSpecial = confirm("Do you want to include special characters? (ex: $@#)");
    var checkNumerics = confirm("Do you want to include numeric values? (ex: 123)");
    userResponse = {
      checkLength: checkLength,
      checkUpper: checkUpper,
      checkLower: checkLower,
      checkSpecial: checkSpecial,
      checkNumerics: checkNumerics
    }
    if((checkLength < 8)||(checkLength > 128))
    alert("Invalid: Please select value between 8-128");
    else if((!checkUpper)&&(!checkLower)&&(!checkSpecial)&&(!checkNumerics))
    alert("Invalid: Please select at least one character type");
    else isValid = true;
  } while(!isValid);
  return userResponse;
}

function generatePassword() {
  var generatorOptions = userQuestions();
  var tempPassword = [];
  var newPassword = "";

  
  if (generatorOptions.checkUpper) {
    for (var i of upperList)
    tempPassword.push(i);
  }
  if (generatorOptions.checkLower) {
    for (var i of lowerList)
    tempPassword.push(i);
  }
  if (generatorOptions.checkSpecial) {
    for (var i of specialList)
    tempPassword.push(i);
  }
  if (generatorOptions.checkNumerics) {
    for (var i of numbersList)
    tempPassword.push(i);
  }

  console.log(tempPassword);

  for (var i = 0; i < generatorOptions.checkLength; i++) {
    newPassword += tempPassword[Math.floor(Math.random() * tempPassword.length)];
  }
  console.log(newPassword);
  return newPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);