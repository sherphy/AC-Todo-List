// export default function deleteProject(deleteButton) {
//     const deleteButton = document.getElementsByClassName('delete-button');
//     Array.from(deleteButton).forEach(button => {
//         button.addEventListener("click", console.log("ok"));    
//     });
// }

export default function deleteProject(deleteButton) {
    const confirm = window.confirm("Are you sure you want to delete your entire project?");
    if (confirm) {
        deleteProjectHandler();
    }
    else {
        window.minimize();
    }
};

function deleteProjectHandler() {

}

export function deleteTasks() {

}