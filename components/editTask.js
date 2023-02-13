import { dateConversion } from "./submitTasks.js";
import { createForm } from "./tasks.js";

export function editTitle() {
  const getProjectTitle = document.querySelectorAll(".project h3");
  getProjectTitle.forEach(projectTitle => {
    projectTitle.style.cursor = "pointer";
    projectTitle.addEventListener("click", (e) => {
      deleteTitle(e);
      projectTitle.contentEditable = "true";
      projectTitle.focus();
      removeAddButton();
    });

    projectTitle.addEventListener("blur", () => {projectTitle.contentEditable = "false";
    viewAddButtion();
    removeDeleteButton();});

    projectTitle.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        projectTitle.contentEditable = "false";
      }
    });


  });
}

function deleteTitle(e) {
  let deleteBtn = document.querySelector('button[name="deleteButton"]');
  if (!deleteBtn) {
    createDeleteButton(e);
  }
  else if (deleteBtn.style.display === 'none') {
      deleteBtn.style.display ='initial';
  }
}

function createDeleteButton(e) {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = 'Delete Project';
  deleteButton.name = "deleteButton";
  deleteButton.className = 'delete-button';
  const buttonContainer = e.currentTarget.nextElementSibling.nextElementSibling;
  buttonContainer.after(deleteButton);
  return {deleteButton};
}

function removeAddButton() {
  const addButton = document.querySelectorAll('.add-task-button');
  addButton.forEach(button => button.style.display = 'none');
}

function removeDeleteButton() {
  const removeButton = document.querySelectorAll('.delete-button');
  removeButton.forEach(button => button.style.display = 'none');
}

function viewAddButtion() {
  const addButton = document.querySelectorAll('.add-task-button');
  addButton.forEach(button => button.style.display = 'inherit');
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
