import deleteProject from "./delete.js";

export default function editTitle() {
  projectTitleHandler();
}

function projectTitleHandler() {
    const getProjectTitle = document.querySelectorAll(".project h3");
    getProjectTitle.forEach((projectTitle) => {
      projectTitle.style.cursor = "pointer";
  
      projectTitle.addEventListener("click", (e) => {
        var counter = e.currentTarget.parentElement.id.split("-")[1];
        projectTitle.contentEditable = "true";
        projectTitle.focus();
        deleteTitle(counter);
      });
      

      // BECAUSE OF THIS, CANT CLICK DELETE BUTTON 
      projectTitle.addEventListener("mouseout", (e) => {
        projectTitle.contentEditable = "false";
        var counter = e.currentTarget.parentElement.id.split("-")[1];
        const deleteButton = document.getElementById(`delete-button-${counter}`);
        deleteButton.addEventListener("click", (e) => {
          deleteProject(deleteButton);
        });
        deleteButton.addEventListener("blur", (e) => {
          removeDeleteButton(counter);
          viewAddButton(counter);
        });
      });
  
      projectTitle.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          projectTitle.contentEditable = "false";
        }
      });
    });
}

function deleteTitle(counter) {
  removeAddButton(counter);
  createDeleteButton(counter);
}

function createDeleteButton(counter) {
  const addButton = document.getElementById(`addTaskButton-${counter}`);
  let deleteButton = addButton.nextElementSibling;
  if (!deleteButton || deleteButton.name !== "deleteButton") {
    deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Project";
    deleteButton.id = `delete-button-${counter}`;
    deleteButton.name = "deleteButton";
    deleteButton.className = "delete-button";
    addButton.after(deleteButton);
    removeAddButton(counter);
  } else if (
    document.getElementById(`delete-button-${counter}`).style.display === "none"
  ) {
    document.getElementById(`delete-button-${counter}`).style.display =
      "inherit";
  }
}

function removeAddButton(counter) {
  const addButton = document.getElementById(`addTaskButton-${counter}`);
  addButton.style.display = "none";
}

function removeDeleteButton(counter) {
  const removeButton = document.getElementById(`delete-button-${counter}`);
  const buttonDiv = document.getElementById(`button-div-${counter}`);
  buttonDiv.removeChild(removeButton);
}

function viewAddButton(counter) {
  const addButton = document.getElementById(`addTaskButton-${counter}`);
  addButton.style.display = "inherit";
}
