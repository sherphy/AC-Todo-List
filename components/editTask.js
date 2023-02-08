export default function editTask(projectDivID) {
    editTaskButtonCreation(projectDivID);
}

function editTaskButtonCreation(projectDivID) {
    const editTaskButton = document.createElement("button");
    editTaskButton.innerHTML = "Edit";
    editTaskButton.className = "edit-button";
    projectDivID.append(editTaskButton);
}