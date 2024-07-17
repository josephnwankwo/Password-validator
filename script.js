"use strict";
const userPassword = document.getElementById("password-input");
const validatingPasswordSvg = document.querySelector(".validator");

// SVG
const lengthCloseSvg = document.getElementById("length-close__svg");
const lengthCheckSvg = document.getElementById("length-check__svg");

const upperCaseCloseSvg = document.getElementById("uppercase-close__svg");
const upperCaseCheckSvg = document.getElementById("uppercase-check__svg");

const lowerCaseCloseSvg = document.getElementById("lowercase-close__svg");
const lowerCaseCheckSvg = document.getElementById("lowercase-check__svg");

const digitCloseSvg = document.getElementById("digit-close__svg");
const digitCheckSvg = document.getElementById("digit-check__svg");

/**
 * User inputs a password 
 * Check if it is up to 8 characters minimum, if it is, change ✖ to ✔
 * Check if it has one uppercase, if it has, change ✖ to ✔
 * Check if it has one lowercase, if it has, change ✖ to ✔
 * Check if it has one digit, if it has, change ✖ to ✔
 * Check if it has one symbol, if it has, change ✖ to ✔
 */

// User inputs a password
function main() {
  userPassword.addEventListener("input", checkPasswordValue);

  // Default
  lengthCheckSvg.classList.add("hidden");
  upperCaseCheckSvg.classList.add("hidden");
  lowerCaseCheckSvg.classList.add("hidden");
  digitCheckSvg.classList.add("hidden");
}
main();

function checkPasswordValue() {
  // Check if it is up to 8 characters minimum, if it is, change ✖ to ✔
  if (userPassword.value.length >= 8) {
    lengthCloseSvg.classList.add("hidden");
    lengthCheckSvg.classList.remove("hidden");
  } else {
    lengthCloseSvg.classList.remove("hidden");
    lengthCheckSvg.classList.add("hidden");
  }

  // Check if it has one uppercase, if it has, change ✖ to ✔
  if (userPassword.value.search(/[A-Z]/) > -1) {
    upperCaseCloseSvg.classList.add("hidden");
    upperCaseCheckSvg.classList.remove("hidden");
  } else {
    upperCaseCloseSvg.classList.remove("hidden");
    upperCaseCheckSvg.classList.add("hidden");
  }

  // Check if it has one lowercase, if it has, change ✖ to ✔
  if (userPassword.value.search(/[a-z]/) > -1) {
    lowerCaseCloseSvg.classList.add("hidden");
    lowerCaseCheckSvg.classList.remove("hidden");
  } else {
    lowerCaseCloseSvg.classList.remove("hidden");
    lowerCaseCheckSvg.classList.add("hidden");
  }

  // Check if it has one digit, if it has, change ✖ to ✔
  if (userPassword.value.search(/[0-9]/) > -1) {
    digitCloseSvg.classList.add("hidden");
    digitCheckSvg.classList.remove("hidden");
  } else {
    digitCloseSvg.classList.remove("hidden");
    digitCheckSvg.classList.add("hidden");
  }
}
