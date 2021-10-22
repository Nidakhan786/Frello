import { Lists } from "./lists.js";

// Selectors
let cardList = document.querySelector(".lists");
let textfield = document.querySelector(".addlists__form");
let addButton = document.querySelector(".addlists__button");
let title = document.querySelector(".addlists__title");
let placeholder = document.querySelector(".addlists__input");
addButton.addEventListener("click", addCard);
placeholder.addEventListener("click", opentextArea);

// Default Lists
new Lists(cardList, "ToDo");
new Lists(cardList, "In Progress");
new Lists(cardList, "Done");

//Functions

function opentextArea(e) {
  textfield.style.display = "block";
  placeholder.style.display = "none";
}
function addCard(event) {
  event.preventDefault();
  console.log(title.value);
  if (title.value != "") {
    new Lists(cardList, title.value);
    title.value = "";
    if (textfield.style.display == "block") {
      placeholder.style.display = "block";
      textfield.style.display = "none";
    }
  }
}
