
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

    //date
    const dateEle = document.createElement("h5");
    dateEle.innerText = dateDay + '/' + dateMonth + '/' + dateYear;
    dateEle.class = "date";
    taskContainer.append(dateEle);

    //priority
    //not working yet
    if (priority) {
        titleEle.addClass("priority");
    }

    console.log("inputTasks");
};