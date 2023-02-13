// import createToDo from "./tasks.js";
// // links the template for creating a to-do list
// export default function addTaskButtonFunction() {
//     //queryselector doesnt seem to work, because not live?
//     const addTaskButton = document.getElementsByClassName('add-task-button');
//     console.log(Array.from(addTaskButton));
//     Array.from(addTaskButton).forEach((button) => {
//         button.addEventListener('click', (e) => {
//             console.log(e.target.id);
//             console.log("ok");
//         });
//     });
//     //problem now is that it is an array
//     // this part onwards doesnt work
//     // for (let i = 0; i < addTaskButton.length; i++) {
//     // addTaskButton.addEventListener('onclick', createToDo('title', 'description', 'dueDate', 'priority'));
// }

// var buttonCounter = 1;
//   export default function addTaskButtonFunction() {
//     //queryselector doesnt seem to work, because not live?
//     //button to add task
//     const addTaskButton = document.createElement("button");
//     addTaskButton.className = "add-task-button";
//     addTaskButton.id = `addTaskButton-${buttonCounter}`;
//     addTaskButton.innerHTML = "Add Task";
//     const projectDivID = document.getElementById(`project-${buttonCounter}`);
//     // getAllProjectDiv.append(addTaskButton);
//     // const getAllAddTaskButton = document.getElementsByClassName('add-task-button');
//     //array.from doesnt work
//     // console.log(Array.from(getAllAddTaskButton));
//     // Array.from(getAllAddTaskButton).forEach((button) => {
//     //     button.addEventListener('click', (e) => {
//     //         console.log(e.target.id);
//     //         console.log("ok");
//     //     });
//     // });
//     // console.log(getAllProjectDiv.length);
//     // for (var i = 0; i < getAllProjectDiv.length; i++) {
//     //     getAllProjectDiv[i].append(addTaskButton);
//     //     addTaskButton.addEventListener('click', (e) => {
//     //         console.log("ok");
//     //     });
//     // }
//     //problem now is that it is an array
//     // this part onwards doesnt work
//     // for (let i = 0; i < addTaskButton.length; i++) {
//     // addTaskButton.addEventListener('onclick', createToDo('title', 'description', 'dueDate', 'priority'));
//     projectDivID.append(addTaskButton);
//     console.log("done");
//     buttonCounter++;
//     console.log(buttonCounter);
//   };

//FINAL VERSION NO CRAP
import { editTitle } from "./editTask.js";
import addTaskContainerCreation from "./tasks.js";

var buttonCounter = 0;
export default function addTaskButtonFunction() {
  const buttonDiv = document.createElement("div");
  buttonDiv.id = `button-div-${buttonCounter}`;
  buttonDiv.className = "button-div";
  const addTaskButton = document.createElement("button");
  addTaskButton.className = "add-task-button";
  addTaskButton.id = `addTaskButton-${buttonCounter}`;
  addTaskButton.innerHTML = "Add Task";
  const projectDivID = document.getElementById(`project-${buttonCounter}`);
  projectDivID.append(buttonDiv);
  buttonDiv.append(addTaskButton);
  addTaskButtonClickHandler();

  buttonCounter++;
  editTitle();
}

function addTaskButtonClickHandler() {
  const getAddTaskButton = document.getElementById(
    `addTaskButton-${buttonCounter}`
  );

  getAddTaskButton.addEventListener("click", (e) => {
    const addTasks = addTaskContainerCreation(e);
    //to hide the Add Task button
    getAddTaskButton.style.display = 'none';
    e.target.after(addTasks);
  });
}
