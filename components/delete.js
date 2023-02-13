// export default function deleteProject(deleteButton) {
//     const deleteButton = document.getElementsByClassName('delete-button');
//     Array.from(deleteButton).forEach(button => {
//         button.addEventListener("click", console.log("ok"));    
//     });
// }

export default function deleteProject(deleteButton) {
    deleteButton.addEventListener("click", (e) => {
        console.log(e.target.id);
        e.stopPropagation();
    });
};

export function deleteTasks() {

}