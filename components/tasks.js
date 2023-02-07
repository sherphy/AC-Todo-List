// //factory function 
// export default function createToDo(title, description, dueDate, priority, notes, checklist) {
//     console.log("createToDo works");
//     const taskFamily = document.createElement("div");
//     const taskTitle = document.createElement("form");
//     taskTitle.className = "task-titles";
//     taskFamily.append(taskTitle);

//     return {
//         title: title,
//         description: description,
//         dueDate: dueDate,
//         priority: priority,
//         notes: notes,
//         checklist: checklist 
//     };
// }
import submitTasks from "./submitTasks.js";

export default function addTaskContainerCreation(e) {
    const counter = e.target.id.split('-')[1];

    const taskContainer = document.createElement("div");
    taskContainer.className = "add-task-container";
    taskContainer.id = `add-task-container-${counter}`;
    const taskTitle = document.createElement("form");
    taskTitle.className = "add-task-form"
    taskContainer.append(taskTitle);

    //title
    const taskInput = document.createElement("input");
    taskInput.type = 'text';
    taskInput.className = "task-title";
    const taskInputLabel = document.createElement("label");
    taskInputLabel.textContent = "Title: ";
    taskTitle.append(taskInputLabel);
    taskTitle.append(taskInput);

    //description
    const descInput = document.createElement("textarea");
    descInput.className = "task-description";
    descInput.rows = "3";
    const descInputLabel = document.createElement("label");
    descInputLabel.textContent = "Description: ";
    taskTitle.append(descInputLabel);
    taskTitle.append(descInput);

    //date
    const dateInput = document.createElement("input");
    dateInput.type = 'date';
    dateInput.className = "task-date";
    const dateInputLabel = document.createElement("label");
    dateInputLabel.textContent = "Due: ";
    taskTitle.append(dateInputLabel);
    taskTitle.append(dateInput);

    //priority
    const priorityInput = document.createElement("input");
    priorityInput.type = 'checkbox';
    priorityInput.className = "task-priority";
    const priorityInputLabel = document.createElement("label");
    priorityInputLabel.className = "task-priority-label";
    priorityInputLabel.textContent = "Priority ";
    taskTitle.append(priorityInputLabel);
    taskTitle.append(priorityInput);

    //submit button
    const addTaskSubmitButton = document.createElement("button");
    addTaskSubmitButton.type = 'submit';
    addTaskSubmitButton.id = `task-submit-button-${counter}`;
    addTaskSubmitButton.className = 'task-submit';
    addTaskSubmitButton.textContent = "Submit";
    taskTitle.appendChild(addTaskSubmitButton);

    submitTasks(addTaskSubmitButton,taskInput,descInput,dateInput,priorityInput, counter);

    return taskContainer;
}


