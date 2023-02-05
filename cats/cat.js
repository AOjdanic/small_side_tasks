"use strict";

// Selecting DOM elements

const button = document.querySelector(".button");
const div = document.querySelector("div");

/////////////////////////////////////////////////////////////////////

const createPic = function (data) {
  let html = `
  <img src="${data.url}"/>`;
  div.insertAdjacentHTML("afterbegin", html);
};

const getCatPic = function () {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => createPic(data[0]));
};

/////////////////////////////////////////////////////////////////////

// Event listeners
button.addEventListener("click", getCatPic);
