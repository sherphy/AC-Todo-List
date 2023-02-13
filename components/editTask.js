import { dateConversion } from "./submitTasks.js";
import { createForm } from "./tasks.js";

export function editTitle() {
  const getProjectTitle = document.querySelectorAll(".project h3");
  getProjectTitle.forEach(projectTitle => {
    projectTitle.style.cursor = "pointer";
    
    projectTitle.addEventListener("click", (e) => {
      var counter = e.currentTarget.parentElement.id.split('-')[1];
      deleteTitle(counter);
      projectTitle.contentEditable = "true";
      projectTitle.focus();
    });

    projectTitle.addEventListener("blur", (e) => {projectTitle.contentEditable = "false";
      var counter = e.currentTarget.parentElement.id.split('-')[1];
      viewAddButton(counter);
      removeDeleteButton(counter);
    });

    projectTitle.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
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
  const addButtons = document.querySelectorAll('.add-task-button');
  addButtons.forEach(addButton => {
    let deleteButton = addButton.nextElementSibling;
    if (!deleteButton || deleteButton.name !== "deleteButton") {
      deleteButton = document.createElement("button");
      deleteButton.innerText = 'Delete Project';
      deleteButton.id = `delete-button-${counter}`;
      deleteButton.name = "deleteButton";
      deleteButton.className = 'delete-button';
      addButton.after(deleteButton);
    }
    else if (deleteButton.style.display === 'none') {
      deleteButton.style.display = 'inherit';
    }
  });
}

function removeAddButton(counter) {
  const addButton = document.getElementById(`addTaskButton-${counter}`);
  addButton.style.display = 'none';
}

function removeDeleteButton(counter) {
  const removeButton = document.getElementById(`delete-button-${counter}`);
  removeButton.style.display = 'none';
}

function viewAddButton(counter) {
  const addButton = document.getElementById(`addTaskButton-${counter}`);
  addButton.style.display = 'inherit';
}

export default function editTaskHandler(buttonCounter) {
    editSelection(buttonCounter);
}

function editSelection(buttonCounter) {
    const getOl = document.getElementById(`project-ol-${buttonCounter}`);
    const li = getOl.querySelectorAll("li");
    li.forEach(list => {
        list.addEventListener("click", (e) => {
          showForm(e);
            openForm(list.querySelector(".edit-form-container"));
        });
    });
}

function showForm(e) {
  const getLi = document.getElementById(e.currentTarget.id);
  //create form 
  //prevent having multiple edits for the same task
  if (!getLi.querySelector('div')) {
  var formDiv = document.createElement("div");
  formDiv.className = "edit-form-container";
  getLi.append(formDiv);

  var formContainer = document.createElement("form");
  var { taskInput, descInput, dateInput, priorityInput } =
    createForm(formContainer);
  formDiv.append(formContainer);
  formContainer.className = "edit-form";
  // formContainer.id = `project-${buttonCounter}-edit-li-${e.currentTarget.id}`;

  taskInput.value = getLi.querySelector("h1").innerText;
  descInput.value = getLi.querySelector("h3").innerText;

  //must change to yyyy/mm/dd
  const newDateSplit = getLi.querySelector("h5").innerText.split("/");
  var date = newDateSplit[0];
  if (date <= 9) {
    date = "0" + date;
  }
  var month = newDateSplit[1];
  if (month <= 9) {
    month = "0" + month;
  }
  const year = newDateSplit[2];
  const newDate = year + "-" + month + "-" + date;
  dateInput.value = newDate;

  if (getLi.querySelector("h1").matches(".priority")) {
    priorityInput.checked = true;
  }

  //submit button
  var addTaskSubmitButton = document.createElement("button");
  addTaskSubmitButton.type = "submit";
  addTaskSubmitButton.id = `edit-submit-button-${e.currentTarget.id}`;
  addTaskSubmitButton.className = "task-submit";
  addTaskSubmitButton.textContent = "Submit";
  formContainer.append(addTaskSubmitButton);
  }

  //get form 
  else {
    addTaskSubmitButton = document.querySelector(`#edit-submit-button-${e.currentTarget.id}`);
    taskInput = getLi.querySelector('.task-title');
    descInput = getLi.querySelector(".task-description");
    dateInput = getLi.querySelector(".task-date");
    priorityInput = getLi.querySelector(".task-priority");
  }
  handleSubmit(addTaskSubmitButton, getLi, taskInput, descInput, dateInput, priorityInput);
}

function handleSubmit(addTaskSubmitButton, getLi, taskInput, descInput, dateInput, priorityInput) {
  addTaskSubmitButton.addEventListener("click", (e) => {
    changeValue(getLi, taskInput, descInput, dateInput, priorityInput);
    closeForm(getLi.querySelector(".edit-form-container"));
    e.preventDefault();
    e.stopPropagation();
  });
}

function changeValue(getLi, taskInput, descInput, dateInput, priorityInput) {
  getLi.querySelector("h1").innerText = taskInput.value;
  getLi.querySelector("h3").innerText = descInput.value;

  const { dateYear, dateMonth, dateDay } = dateConversion(dateInput);
  if (dateDay === "") {
    getLi.querySelector("h5").innerText = "";
  } else {
    getLi.querySelector("h5").innerText =
      dateDay + "/" + dateMonth + "/" + dateYear;
  }

  if (priorityInput.checked === false) {
    if (getLi.querySelector("h1").matches(".priority")) {
      getLi.querySelector("h1").classList.remove("priority");
    }
  } else {
    getLi.querySelector("h1").classList.add("priority");
  }
}

function closeForm(editFormContainer) {
  editFormContainer.style.display = 'none';
}

function openForm(editFormContainer) {
  editFormContainer.style.display = 'flex';
}
