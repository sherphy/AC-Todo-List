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

function deleteProjectHandler(e) {
    const project = e.target.parentElement.parentElement;
    const projectBody = document.getElementById("project-body");
    projectBody.removeChild(project);
}

export function deleteTasks(getLi) {
    const completeTaskButton = document.createElement("input");
    completeTaskButton.type = 'checkbox';
    completeTaskButton.className = 'complete';
    const h1 = getLi.querySelector("h1");
    h1.append(completeTaskButton);

    // completeTaskButton.addEventListener("click", (e) => {
    // e.preventDefault();
    // deleteTaskHandler(completeTaskButton);
    // });
}

// function deleteTaskHandler(deleteTaskButton) {
//     const li = deleteTaskButton.closest("li");
//     const ol = deleteTaskButton.closest("ol");
//     ol.removeChild(li);
// }