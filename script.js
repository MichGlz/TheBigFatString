"use strict";

let myInput;
let myString;
let myWord;

document.querySelector("button").addEventListener("click", workString);
const options = document.querySelector("#options");
const inputBox = document.querySelector("#myInput");
const outputBox = document.querySelector("#myOutput");

function workString() {
  console.log("workString");
  myInput = inputBox.value;
  outputBox.value = "";

  if (options.value === "opt1") {
    myInput = myInput.toLowerCase();
    myString = myInput[0].toUpperCase() + myInput.substring(1);
    printResult();
    return;
  }

  if (options.value === "opt2") {
    myString = myInput.split(" ")[0];
    printResult();
    return;
  }

  if (options.value === "opt3") {
    myString = myInput.split(" ")[0] + " have " + myInput.split(" ")[0].length + " characters";
    printResult();
    return;
  }

  if (options.value === "opt4") {
    if (myInput.split(" ").length < 3) {
      myString = "you don't have middle name";
    } else {
      myString = `the middle name is: ${myInput.substring(myInput.indexOf(" ") + 1, myInput.lastIndexOf(" "))}, start at index[${myInput.indexOf(" ")}] and ends at index[${myInput.lastIndexOf(" ")}]`;
    }
    printResult();
    return;
  }

  if (options.value === "opt5") {
    if (myInput.endsWith(".jpg")) {
      myString = "this file is a jpg";
    } else if (myInput.endsWith(".png")) {
      myString = "this file is a png";
    } else {
      myString = "this file is not support";
    }
    printResult();
    return;
  }

  if (options.value === "opt6") {
    myString = "";
    myString = myString.padEnd(myInput.length, "*");
    printResult();
    return;
  }

  if (options.value === "opt7") {
    myInput = myInput.toLowerCase();
    myString = myInput.substring(0, 2) + myInput[2].toUpperCase() + myInput.substring(3);
    printResult();
    return;
  }

  if (options.value === "opt8") {
    opt8();
  }
}

function printResult() {
  console.log("printResult");
  outputBox.value = myString;
}

function opt8() {
  myString = myInput.split(" ");

  myString.forEach((element) => {
    myWord = element.replace(element[0], element[0].toUpperCase());
    console.log(myWord);

    if (myWord.includes("-")) {
      let seconWord = myWord.split("-")[1];
      outputBox.value += `${myWord.split("-")[0]}-${seconWord.replace(seconWord[0], seconWord[0].toUpperCase())} `;
    } else {
      outputBox.value += `${myWord} `;
    }
  });

  outputBox.value = outputBox.value.trim();
}
