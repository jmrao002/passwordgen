// Arrays containing all available chars
let upperChars = [
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
let lowerChars = [
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
let specialChars = [
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
];
let numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function to collect password params from user
function generatePassword() {
  let lengthChoice = parseInt(
    window.prompt(
      `How many characters should your password contain, boo? Please select a value between 8 and 128.`
    )
  );

  // Statement to ensure user obeys password params
  if (!lengthChoice || lengthChoice < 8 || lengthChoice > 128) {
    window.alert(
      "Not paying attention, boo? The password must be between 8 and 128 characters!"
    );
    return;
  }

  //prompt user for uppercase characters
  let upperChoice = window.confirm(
    "Do you want to include uppercase characters? Cancel = No, OK = Yes"
  );

  //prompt user for lowercase characters
  let lowerChoice = window.confirm(
    "Do you want to include lowercase characters? Cancel = No, OK = Yes"
  );

  //prompt user for special characters
  let specialChoice = window.confirm(
    "Do you want to include special characters? Cancel = No, OK = Yes"
  );

  //prompt user for numeric characters
  let numericChoice = window.confirm(
    "Do you want to include numeric characters? Cancel = No, OK = Yes"
  );

  // Key value pairs for validated user choices
  let validatedChoices = {
    length: lengthChoice,
    upper: upperChoice,
    lower: lowerChoice,
    special: specialChoice,
    numeric: numericChoice,
  };

  // Set empty array to be filled by random values based on boolean response
  let emptyPwArray = [];

  // Add values to empty array
  if (validatedChoices.special) {
    for (i = 0; i < specialChars.length; ++i) {
      emptyPwArray.push(specialChars[i]);
    }
  }
  if (validatedChoices.numeric) {
    for (i = 0; i < numericChars.length; ++i) {
      emptyPwArray.push(numericChars[i]);
    }
  }
  if (validatedChoices.lower) {
    for (i = 0; i < lowerChars.length; ++i) {
      emptyPwArray.push(lowerChars[i]);
    }
  }
  if (validatedChoices.upper) {
    for (i = 0; i < upperChars.length; ++i) {
      emptyPwArray.push(upperChars[i]);
    }
  }
  // Set empty array to be filled by values that make up final password
  let almostFinal = [];

  for (let i = 0; i < validatedChoices.length; ++i) {
    let randomPicker = Math.floor(
      Math.random() * Math.floor(emptyPwArray.length)
    );
    almostFinal.push(emptyPwArray[randomPicker]);
  }

  // Remove punctuation from final password in almostFinal array
  let finalPW = almostFinal.join("");

  // Write password to textarea based on id
  document.querySelector("#password").innerHTML = finalPW;
}

// Function to write password
// function writePassword() {
//   let password = generatePassword();
//  let passwordText = document.querySelector("#password");
//  passwordText.value = password;
//}

// Button to kick off prompts
let generatePasswordButton = document.getElementById("generate");
generatePasswordButton.addEventListener("click", generatePassword);
