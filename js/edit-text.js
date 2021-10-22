export class EditText {
  constructor(title, parent, card, property) {
    this.title = title;
    this.parent = parent;
    this.card = card;
    this.property = property;
    this.display();
  }

  display() {
    //Create Element
    this.div = document.createElement("div");
    this.p = document.createElement("p");

    // Add properties
    this.p.innerText = this.title;

    this.div.classList.add("edittext");
    //Add Event Listner
    this.p.addEventListener("click", () => {
      this.showEditText.call(this);
    });

    // Append
    this.div.append(this.p);
    this.parent.append(this.div);
  }

  showEditText() {
    let prevTitle = this.title;
    // Create Elements
    this.input = document.createElement("input");
    this.save = document.createElement("button");

    // Add Properties
    this.p.remove();
    this.input.value = prevTitle;

    // Add Class
    this.save.innerHTML = "Save";
    this.save.classList.add("modal__save ");
    this.input.classList.add("edittext__input");

    // Add Event Listeners
    this.save.addEventListener("click", () => {
      this.title = this.input.value;
      this.card.modalObject[this.property] = this.input.value;
      if (this.property == "text") {
        this.card.taskTitle.innerText = this.input.value;
      }
      this.div.remove();
      this.display();
    });

    this.div.append(this.input);
    this.div.append(this.save);
  }
}
