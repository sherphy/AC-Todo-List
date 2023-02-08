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
    })
}

function editSelection(buttonCounter) {
    const getOl = document.getElementById(`project-ol-${buttonCounter}`);
    const li = getOl.querySelectorAll("li");
    li.forEach(list => {
        list.addEventListener("click", (e) => {
            console.log(e.target.id);
            showForm(e);
        });
    });
}

function showForm(e) {
//     const formTitle = 
//     const formDate = 
//     const formDesc = 
//     const formPriority = 

//     formTitle.value = 
}