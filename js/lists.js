import { Card } from "./card.js";

export class Lists {
  constructor(parent, title) {
    this.parent = parent;
    this.title = title;
    this.lists = [];

    this.display();
  }
  addTask() {
    let title = this.input.value;
    this.lists.push(new Card(title, this.taskListContainer, this));
  }

  display() {
    this.createTasks();
    this.parent.append(this.taskList);
  }

  createTasks() {
    //Create elements
    this.taskList = document.createElement("div");
    this.taskListContainer = document.createElement("div");
    this.taskListHeader = document.createElement("li");
    this.taskListTitle = document.createElement("h3");
    this.addToDo = document.createElement("div");
    this.input = document.createElement("input");
    this.addToDoInputButton = document.createElement("button");

    // Adding Class
    this.taskList.classList.add("tasklist");
    this.taskListContainer.classList.add("tasklist__container");
    this.taskListHeader.classList.add("tasklist__header");
    this.taskListTitle.classList.add("tasklist__title");
    this.addToDo.classList.add("addtask");
    this.input.classList.add("addtask__input");
    this.addToDoInputButton.classList.add("addtask__button");
    this.taskListTitle.contentEditable = true;
    this.taskListTitle.innerText = this.title;

    // adding properties
    this.input.placeholder = "Add another Task";
    this.addToDoInputButton.innerText = "Add";
    this.addToDoInputButton.id = "to-do-list-button";

    //Add Event listener
    this.addToDoInputButton.addEventListener("click", () => {
      if (this.input.value != "") {
        this.addTask.call(this);
        this.input.value = "";
      }
    });

    //Append elements to the ListContainer
    this.taskListHeader.append(this.taskListTitle);
    this.taskList.append(this.taskListContainer);
    this.taskListContainer.append(this.taskListHeader);
    this.addToDo.append(this.input);
    this.addToDo.append(this.addToDoInputButton);
    this.taskListContainer.append(this.addToDo);
  }
}
