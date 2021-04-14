// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];

let numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  // Prompt user for password length
  let lengthChoice = window.prompt(
    "Choose number of characters in password (min: 8, max: 128)"
  );
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Please choose length between 8 and 128 characters");
  }
  // Prompt user for character types
  let lowerCaseChoice = window.prompt(
    "Should the password contain lowercase characters? (Y/N)"
  );
  lowerCaseChoice = lowerCaseChoice.toUpperCase;
  let upperCaseChoice = window.prompt(
    "Should the password contain uppercase characters? (Y/N)"
  );
  upperCaseChoice = upperCaseChoice.toUpperCase;
  let numericChoice = window.prompt(
    "Should the password contain numbers? (Y/N)"
  );
  numericChoice = numericChoice.toUpperCase;
  let specialChoice = window.prompt(
    "Should the password contain special characters? (Y/N)"
  );
  specialChoice = specialChoice.toUpperCase;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
