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

    if (completeTaskButton.checked) {
        strikeThroughTask(h1);
    }

    // completeTaskButton.addEventListener("click", (e) => {
    // e.preventDefault();
    // strikeThroughTask(h1);
    // deleteTaskHandler(completeTaskButton);
    // // can do strikethrough first, then when project is blurred can removeChild
    // });
}

function strikeThroughTask(h1) {
    h1.classList.add("strikethrough");
}

// function deleteTaskHandler(completeTaskButton) {
//     const li = completeTaskButton.closest("li");
//     const ol = completeTaskButton.closest("ol");
//     ol.removeChild(li);
// }