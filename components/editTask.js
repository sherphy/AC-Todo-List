//SO WHY CANT I CLICK ON THE SAME TASK TWICE?

import { dateConversion } from "./submitTasks.js";
import { createForm } from "./tasks.js";

export default function editTask(buttonDiv, buttonCounter) {
    editTaskButtonCreation(buttonDiv, buttonCounter);
}

function editTaskButtonCreation(buttonDiv, buttonCounter) {
    const editTaskButton = document.createElement("button");
    editTaskButton.innerHTML = "Edit";
    editTaskButton.className = "edit-button";
    editTaskButton.id = `editButton-${buttonCounter}`;
    buttonDiv.append(editTaskButton);
    editTaskButtonHandler(buttonCounter);
}

function editTaskButtonHandler(buttonCounter) {
    const editTaskButton = document.getElementById(`editButton-${buttonCounter}`);
    editTaskButton.addEventListener("click", (e) => {
        //hide add task
        const addButton = document.getElementById(`addTaskButton-${buttonCounter}`);
        addButton.style.display = 'none';

        editTaskButton.innerText = "Return";
        editSelection(buttonCounter);
        // returnHandler(buttonCounter);
    })
}

function editSelection(buttonCounter) {
    const getOl = document.getElementById(`project-ol-${buttonCounter}`);
    const li = getOl.querySelectorAll("li");
    var counter = 1; 
    li.forEach(list => {
        list.addEventListener("click", (e) => {
          showForm(e);
          if (counter % 2 === 0) {
            openForm(list.querySelector(".edit-form-container"));
          }
          counter++;
        });
    });
}

function showForm(e) {
  const getLi = document.getElementById(e.currentTarget.id);
  console.log(getLi);
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
  handleSubmit(addTaskSubmitButton, getLi, taskInput, descInput, dateInput, priorityInput)
}

function handleSubmit(addTaskSubmitButton, getLi, taskInput, descInput, dateInput, priorityInput) {
  addTaskSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    changeValue(getLi, taskInput, descInput, dateInput, priorityInput);
    closeForm(getLi.querySelector(".edit-form-container"));
    //submit already then hide
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
  console.log("is closed");
}

function openForm(editFormContainer) {
  editFormContainer.style.display = 'flex';
  console.log("is not closed");
}

// function returnHandler(buttonCounter) {
//     const editTaskButton = document.getElementById(`editButton-${buttonCounter}`);
//     editTaskButton.addEventListener("click", (e) => {
//         const addTaskContainer = document.getElementById(`add-task-container-${counter}`);
//         buttonContainer.removeChild(addTaskContainer);
//     })
// }