import { EditText } from "./edit-text.js";
let taskDragged = null;
export class Card {
  constructor(title, parent, list) {
    (this.title = title),
      (this.parent = parent),
      (this.list = list),
      (this.modalObject = {
        text: title,
        description: "Click Here to describe your task....",
      });
    this.display();
  }
  display() {
    // Selectors
    this.lists = document.querySelector(".lists");

    // Create Elements
    this.task = document.createElement("div");
    this.taskTitle = document.createElement("h4");
    this.taskDelete = document.createElement("button");

    //Class List
    this.task.classList.add("task");
    this.taskTitle.classList.add("task__title");
    this.taskDelete.classList.add("task__delete");

    // Add Properties
    this.taskTitle.innerText = this.modalObject.text;
    this.taskDelete.innerHTML = `<i class="fas fa-times"></i>`;

    // Add Event Listeners
    this.taskDelete.addEventListener("click", this.deleteCard);
    this.taskTitle.addEventListener("click", (e) => {
      if (e.target != this.taskDelete) {
        this.displayModal.call(this);
      }
    });

    // Append
    this.task.appendChild(this.taskTitle);
    this.task.appendChild(this.taskDelete);
    this.parent.append(this.task);

    // Drag and Drop tasks
    this.tasks = document.querySelectorAll(".task");
    this.task.draggable = true; // Making task draggable

    // Adding Event Listeners to draggable elements
    this.tasks.forEach((task) => {
      task.addEventListener("dragstart", handleDragStart, false);
      task.addEventListener("dragend", handleDragEnd, false);
    });

    this.droplist = document.querySelectorAll(".tasklist__container");
    // Adding Event Listeners to the dropped list
    this.droplist.forEach((list) => {
      list.addEventListener("dragenter", handleDragEnter, false);
      list.addEventListener("dragover", handleDragOver, false);
      list.addEventListener("dragleave", handleDragLeave, false);
      list.addEventListener("drop", handleDrop, false);
    });

    function handleDragStart(e) {
      taskDragged = this;
      console.log("start");
    }
    function handleDragEnd(e) {
      taskDragged = null;
      console.log("end");
    }
    function handleDragOver(e) {
      e.preventDefault();
      console.log("over");
    }

    function handleDragEnter(e) {
      e.preventDefault();
      console.log("enter");
    }

    function handleDragLeave(e) {
      e.stopPropagation();
      console.log("leave");
    }

    function handleDrop(e) {
      this.append(taskDragged);
      console.log("drop");
    }
  }

  deleteCard(e) {
    this.task = document.querySelector(".task");
    this.parentNode.remove();
  }

  displayModal() {
    this.root = document.querySelector(".root");
    //Create elements
    this.modal = document.createElement("div");
    this.modalContainer = document.createElement("div");
    this.modalTitleHeading = document.createElement("h2");
    this.modalTitle = document.createElement("div");
    this.modalDescriptionHeading = document.createElement("h2");
    this.modalDescription = document.createElement("div");
    this.modalClose = document.createElement("button");

    //Add Text
    this.modalTitleHeading.innerText = "Heading";
    this.modalDescriptionHeading.innerText = "Description";
    this.modalClose.innerHTML = `<i class="fas fa-times"></i>`;

    //Add class names
    this.modal.classList.add("modal");
    this.modalContainer.classList.add("modal__container");
    this.modalTitle.classList.add("modal__title");
    this.modalDescription.classList.add("modal__description");
    this.modalClose.classList.add("modal__close");
    //Event listeners
    this.modalContainer.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("modal__container")) {
        this.modalContainer.remove();
      }
    });

    this.modalClose.addEventListener("click", (e) => {
      this.modalContainer.remove();
    });
    //Append
    this.modal.append(this.modalClose);
    this.modal.append(this.modalTitleHeading);
    this.modal.append(this.modalTitle);
    this.modal.append(this.modalDescriptionHeading);
    this.modal.append(this.modalDescription);
    this.modalContainer.append(this.modal);

    this.root.append(this.modalContainer);
    new EditText(
      this.modalObject.description,
      this.modalDescription,
      this,
      "description",
      "textarea"
    );
    new EditText(this.modalObject.text, this.modalTitle, this, "text", "input");
  }
}
