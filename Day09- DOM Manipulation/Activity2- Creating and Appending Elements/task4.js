// create a new list
let newLi = document.createElement("li");

// add some text content to new list
newLi.textContent = "new item";

// append new list to the existing ul list
let ul = document.getElementById('myList');
ul.appendChild(newLi)