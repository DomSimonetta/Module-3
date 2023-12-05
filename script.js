// Assignment code here
function generatePassword() {
  var upper = prompt("How many uppercase letters would you like?");
  var lower = prompt("How many lowercase letters would you like?");
  var numbers = prompt("How many numbers would you like?");
  var symbols = prompt("How many symbols would you like?");
  var length = prompt("How long would you like your password to be? (between 8 - 128)");
 
}
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ['!','@','#','$','%','^','&','*'];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log = upperCaseLetters[Math.floor(Math.random() *upperCaseLetters.length)];

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
