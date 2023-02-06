
export default function inputTasksIntoContainer(title, desc, dateYear, dateMonth, dateDay, priority, counter) {
    const parentContainer = document.getElementById(`project-${counter}`);

    //makes the add task button come back
    const addTaskButton = document.getElementById(`addTaskButton-${counter}`);
    addTaskButton.style.display = 'inherit';

    const addTaskContainer = document.getElementById(`add-task-container-${counter}`);
    parentContainer.removeChild(addTaskContainer);
    
    const taskContainer = document.createElement("div");
    parentContainer.append(taskContainer);
    alert(parentContainer.id);

    //title
    const titleEle = document.createElement("h1");
    titleEle.innerText = title;
    titleEle.class = "title";
    taskContainer.append(titleEle);

    //description
    const descEle = document.createElement("h3");
    descEle.innerText = desc;
    descEle.class = "desc";
    taskContainer.append(descEle);

    // //date
    // const dateInput = document.createElement("input");
    // dateInput.type = 'date';
    // dateInput.className = "task-date";
    // const dateInputLabel = document.createElement("label");
    // dateInputLabel.textContent = "Due: ";
    // taskTitle.append(dateInputLabel);
    // taskTitle.append(dateInput);

    // //priority
    // const priorityInput = document.createElement("input");
    // priorityInput.type = 'checkbox';
    // priorityInput.className = "task-priority";
    // const priorityInputLabel = document.createElement("label");
    // priorityInputLabel.className = "task-priority-label";
    // priorityInputLabel.textContent = "Priority ";
    // taskTitle.append(priorityInputLabel);
    // taskTitle.append(priorityInput);

    // //submit button
    // const addTaskSubmitButton = document.createElement("button");
    // addTaskSubmitButton.type = 'submit';
    // addTaskSubmitButton.className = 'task-submit';
    // addTaskSubmitButton.textContent = "Submit";
    // taskTitle.appendChild(addTaskSubmitButton);
    console.log("inputTasks");
};