export default function editTask(buttonDiv, buttonCounter) {
    editTaskButtonCreation(buttonDiv, buttonCounter);
}

function editTaskButtonCreation(buttonDiv, buttonCounter) {
    const editTaskButton = document.createElement("button");
    editTaskButton.innerHTML = "Edit";
    editTaskButton.className = "edit-button";
    editTaskButton.id = `editButton-${buttonCounter}`;
    buttonDiv.append(editTaskButton);
}