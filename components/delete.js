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
   
    // completeTaskButton.addEventListener("click", (e) => {
    // deleteTaskHandler(completeTaskButton);
    // // can do strikethrough first, then when project is blurred can removeChild
    // });
}

// function deleteTaskHandler(completeTaskButton) {
//     const li = completeTaskButton.closest("li");
//     const ol = completeTaskButton.closest("ol");
//     ol.removeChild(li);
// }