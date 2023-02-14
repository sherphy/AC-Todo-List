import deleteProject from "./delete.js";

export default function editTitle() {
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
      projectTitle.addEventListener("blur", (e) => {
        projectTitle.contentEditable = "false";
        var counter = e.currentTarget.parentElement.id.split("-")[1];
        const deleteButton = document.getElementById(`delete-button-${counter}`);
        if (!deleteButton) {
          createDeleteButton(counter);
        }
        else {
          viewDeleteButton(counter);
        }
        removeDeleteButton(counter);
        viewAddButton(counter);
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
    deleteButton.addEventListener("mousedown", (e) => {
      deleteProject(e);
      e.stopPropagation();
    });
    addButton.style.display = "none";
  } else {
    viewDeleteButton(counter);
  }
}

function removeAddButton(counter) {
  const addButton = document.getElementById(`addTaskButton-${counter}`);
  addButton.style.display = "none";
}

function removeDeleteButton(counter) {
  const removeButton = document.getElementById(`delete-button-${counter}`);
  removeButton.style.display = "none";
}

function viewAddButton(counter) {
  const addButton = document.getElementById(`addTaskButton-${counter}`);
  addButton.style.display = "inherit";
}

function viewDeleteButton(counter) {
  const deleteButton = document.getElementById(`delete-button-${counter}`);
  deleteButton.style.display = "inherit";
}