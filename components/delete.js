// export default function deleteProject(deleteButton) {
//     const deleteButton = document.getElementsByClassName('delete-button');
//     Array.from(deleteButton).forEach(button => {
//         button.addEventListener("click", console.log("ok"));    
//     });
// }

export default function deleteProject(deleteButton) {
    deleteButton.addEventListener("click", (e) => {
        alert("Are you sure you want to delete your entire project?");
        e.stopImmediatePropagation();
    });
};

export function deleteTasks() {

}