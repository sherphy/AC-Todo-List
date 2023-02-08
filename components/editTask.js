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
        console.log(e.target.id);
        // showForm(); 
    })
}

function editSelection()

// function showForm() {
//     const formTitle = 
//     const formDate = 
//     const formDesc = 
//     const formPriority = 

//     formTitle.value = 
// }