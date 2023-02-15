var listTaskCounter = 1;
export default function inputTasksIntoContainer(title, desc, dateYear, dateMonth, dateDay, priority, counter) {
    const parentContainer = document.getElementById(`project-${counter}`);

    //makes the add task button come back
    const addTaskButton = document.getElementById(`addTaskButton-${counter}`);
    addTaskButton.style.display = 'initial';

    const addTaskContainer = document.getElementById(`add-task-container-${counter}`);
    parentContainer.removeChild(addTaskContainer);
    
    //ordered list
    const olContainer = document.getElementById(`project-ol-${counter}`);
    parentContainer.append(olContainer);

    const taskContainer = document.createElement("li");
    taskContainer.id=`project-${counter}-list-${listTaskCounter}`;
    olContainer.append(taskContainer);

    //title
    const titleEle = document.createElement("h1");
    titleEle.innerText = title.toUpperCase();
    titleEle.className = "title";
    taskContainer.append(titleEle);

    //date
    const dateEle = document.createElement("h5");
    if (dateDay === '') {
        dateEle.innerText = '';
    }
    else {
        dateEle.innerText = dateDay + '/' + dateMonth + '/' + dateYear;
    }
    dateEle.className = "date";
    taskContainer.append(dateEle);

    //description
    const descEle = document.createElement("h3");
    descEle.innerText = desc;
    descEle.className = "desc";
    taskContainer.append(descEle);

    //priority
    if (priority.checked) {
        titleEle.classList.add("priority");
    }

    listTaskCounter++;
};