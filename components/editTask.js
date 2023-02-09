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

        console.log(e.target.id);
        editSelection(buttonCounter);

        editTaskButton.innerText = "Return";
        // returnHandler(buttonCounter);
    })
}

function editSelection(buttonCounter) {
    const getOl = document.getElementById(`project-ol-${buttonCounter}`);
    const li = getOl.querySelectorAll("li");
    li.forEach(list => {
        list.addEventListener("click", (e) => {
            showForm(e, buttonCounter);
        },
        //prevent having many forms 
        {once: true}
        );
    });
}

function showForm(e, buttonCounter) {
    const formDiv = document.createElement("div");
    formDiv.className = "edit-form-container";
    const formContainer = document.createElement("form");
    formDiv.append(formContainer);
    formContainer.className = "edit-form";
    console.log(e.target.id);
    const getLi = document.getElementById(e.target.id);
    formContainer.id = `project-${buttonCounter}-edit-li-${e.target.id}`;
    getLi.append(formDiv);
    const {taskInput,
        descInput,
        dateInput,
        priorityInput} = createForm(formContainer);
    taskInput.innerText = getLi.h3;
}
//     const formDate = 
//     const formDesc = 
//     const formPriority = 

//     formTitle.value = 

// function returnHandler(buttonCounter) {
//     const editTaskButton = document.getElementById(`editButton-${buttonCounter}`);
//     editTaskButton.addEventListener("click", (e) => {
//         const addTaskContainer = document.getElementById(`add-task-container-${counter}`);
//         buttonContainer.removeChild(addTaskContainer);
//     })
// }