/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "The dog ",
  "My grandma ",
  "The mailman ",
  "My bird ",
  "My mum ",
  "My roommate "
];
let action = ["ate ", "peed ", "crushed ", "broke ", "sold "];
let what = ["my homework ", "my phone ", "the car ", "my laptop "];
let when = [
  "before class.",
  "when I was sleeping.",
  "while I was exercising.",
  "during my lunch.",
  "while I was praying.",
  "yesterday."
];
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML =
    getRandom(who) + getRandom(action) + getRandom(what) + getRandom(when);
};
