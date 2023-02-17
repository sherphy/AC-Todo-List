// export default function deleteProject(deleteButton) {
//     const deleteButton = document.getElementsByClassName('delete-button');
//     Array.from(deleteButton).forEach(button => {
//         button.addEventListener("click", console.log("ok"));    
//     });
// }

export default function deleteProject(e) {
    const confirm = window.confirm("Are you sure you want to delete your entire project?");
    if (confirm) {
        deleteProjectHandler(e);
    }
    else {
        window.minimize();
    }
};

export function deleteProjectHandler(e) {
    const project = e.target.parentElement.parentElement;
    const projectBody = document.getElementById("project-body");
    projectBody.removeChild(project);
}

//must continue after strikethrough event to delete
export function deleteTaskHandler(completeTaskButton) {
    const li = completeTaskButton.closest("li");
    const ol = completeTaskButton.closest("ol");
    ol.removeChild(li);
}