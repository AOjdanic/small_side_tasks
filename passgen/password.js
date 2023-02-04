"use strict";

//selecting DOM elements

/////////////////////////////////////////////////////////////////////

const textarea = document.querySelector("textarea");
const slider = document.querySelector(".slider");
const sliderDisplay = document.querySelector(".slider_number");
const numbersCheckbox = document.querySelector(".chk_num");
const lowercaseLettersCheckbox = document.querySelector(".chk_lower");
const uppercaseLettersCheckbox = document.querySelector(".chk_upper");
const symbolsCheckbox = document.querySelector(".chk_sym");
const strengthDisplay = document.querySelector(".strength_name");
const firstDiv = document.querySelector(".first");
const secondDiv = document.querySelector(".second");
const thirdDiv = document.querySelector(".third");
const fourthDiv = document.querySelector(".fourth");
const generateButton = document.querySelector(".button");

/////////////////////////////////////////////////////////////////////

//functions for app functionality

/////////////////////////////////////////////////////////////////////

const passwordMembers = {
  lowercaseLetters: [
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
  ],
  uppercaseLetters: [
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
  ],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  symbols: [
    ".",
    ",",
    "/",
    "|",
    "\\",
    "!",
    "?",
    "<",
    ">",
    "~",
    "*",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    "'",
    '"',
    "`",
  ],
};

/////////////////////////////////////////////////////////////////////

const passwordGenerator = function (numberOfCharacters, passwordArray) {
  let string = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    let index = Math.floor(Math.random() * passwordArray.length);
    string += passwordArray[index];
  }
  return string;
};

/////////////////////////////////////////////////////////////////////

const resetDisplay = function () {
  fourthDiv.style.backgroundColor = "unset";
  fourthDiv.style.borderColor = "white";
  thirdDiv.style.backgroundColor = "unset";
  thirdDiv.style.borderColor = "white";
  secondDiv.style.backgroundColor = "unset";
  secondDiv.style.borderColor = "white";
  firstDiv.style.backgroundColor = "unset";
  firstDiv.style.borderColor = "white";
};

/////////////////////////////////////////////////////////////////////

const displayEval = function (type) {
  resetDisplay();
  if (type === "weak") {
    strengthDisplay.textContent = "WEAK  ";
    fourthDiv.style.backgroundColor = "crimson";
    fourthDiv.style.borderColor = "crimson";
  } else if (type === "medium") {
    strengthDisplay.textContent = "MEDIUM";
    fourthDiv.style.backgroundColor = "orangered";
    fourthDiv.style.borderColor = "orangered";
    thirdDiv.style.backgroundColor = "orangered";
    thirdDiv.style.borderColor = "orangered";
  } else if (type === "strong") {
    strengthDisplay.textContent = "STRONG";
    fourthDiv.style.backgroundColor = "green";
    fourthDiv.style.borderColor = "green";
    thirdDiv.style.backgroundColor = "green";
    thirdDiv.style.borderColor = "green";
    secondDiv.style.backgroundColor = "green";
    secondDiv.style.borderColor = "green";
  } else if (type === "insane") {
    strengthDisplay.textContent = "INSANE";
    fourthDiv.style.backgroundColor = "blueviolet";
    fourthDiv.style.borderColor = "blueviolet";
    thirdDiv.style.backgroundColor = "blueviolet";
    thirdDiv.style.borderColor = "blueviolet";
    secondDiv.style.backgroundColor = "blueviolet";
    secondDiv.style.borderColor = "blueviolet";
    firstDiv.style.backgroundColor = "blueviolet";
    firstDiv.style.borderColor = "blueviolet";
  }
};

/////////////////////////////////////////////////////////////////////

const evaluatePassword = function (membersArr, password) {
  if (membersArr.length <= 32 && membersArr.length == 10) {
    if (password.length <= 16) return "weak";
    else return "medium";
  } else if (membersArr.length <= 32) {
    if (password.length <= 11) {
      return "weak";
    } else if (password.length == 12) {
      return "medium";
    } else if (password.length <= 14) {
      return "strong";
    } else if (password.length > 14) {
      return "insane";
    }
  } else if (membersArr.length >= 36 && membersArr.length <= 58) {
    if (password.length <= 9) {
      return "weak";
    } else if (password.length == 10) {
      return "medium";
    } else if (password.length <= 12) {
      return "strong";
    } else if (password.length > 12) {
      return "insane";
    }
  } else if (membersArr.length >= 62 && membersArr.length <= 84) {
    if (password.length <= 9) {
      return "weak";
    } else if (password.length == 10) {
      return "medium";
    } else if (password.length == 11) {
      return "strong";
    } else if (password.length > 11) {
      return "insane";
    }
  } else if (membersArr.length > 84) {
    if (password.length <= 8) {
      return "weak";
    } else if (password.length == 9) {
      return "medium";
    } else if (password.length <= 11) {
      return "strong";
    } else if (password.length > 11) {
      return "insane";
    }
  }
};

/////////////////////////////////////////////////////////////////////

const createPasswordArray = function () {
  let passwordArray = [];
  if (numbersCheckbox.checked) {
    passwordArray = [...passwordArray, ...passwordMembers.numbers];
  }
  if (lowercaseLettersCheckbox.checked) {
    passwordArray = [...passwordArray, ...passwordMembers.lowercaseLetters];
  }
  if (uppercaseLettersCheckbox.checked) {
    passwordArray = [...passwordArray, ...passwordMembers.uppercaseLetters];
  }
  if (symbolsCheckbox.checked) {
    passwordArray = [...passwordArray, ...passwordMembers.symbols];
  }
  return passwordArray;
};

/////////////////////////////////////////////////////////////////////

//Event listeners

/////////////////////////////////////////////////////////////////////

slider.addEventListener("click", function () {
  sliderDisplay.textContent = slider.value;
});

slider.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft") sliderDisplay.textContent = slider.value;
});

slider.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") sliderDisplay.textContent = slider.value;
});

/////////////////////////////////////////////////////////////////////

generateButton.addEventListener("click", function (e) {
  e.preventDefault();
  let passwordArr = createPasswordArray();
  if (passwordArr.length == 0) {
    alert("please select at least one type of characters for your password");
    return;
  }
  textarea.textContent = passwordGenerator(Number(slider.value), passwordArr);
  displayEval(evaluatePassword(passwordArr, textarea.textContent));
});

/////////////////////////////////////////////////////////////////////
