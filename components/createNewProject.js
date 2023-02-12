//   //when submitting the button, new project is created with designated name
//   export default function createNewProject() {
//   //add counter to make each project have an individual id that increases
//   var counter = 1;
//   const projectForm = document.getElementById("project-creation-form");
//   projectForm.addEventListener("submit", (e) => {
//     //so cannot anyhow submit
//     e.preventDefault();
//     //creating new project with class name of project
//     const projectDiv = document.createElement("div");
//     projectDiv.className = "project";
//     projectDiv.id = `project-${counter}`;
//     //the new project name is now added as a project
//     const projectTitle = document.createElement("h3");
//     projectTitle.innerText = document
//       .querySelector("#project-name")
//       .value.toUpperCase();
//     projectDiv.append(projectTitle);
//     //CANNOT USE DOCUMENT.GETELEMENTSBYCLASS COS IT WILL BE ARRAY
//     const projectBody = document.getElementById("project-body");
//     projectBody.append(projectDiv);

//     //button to add task
//     const addTaskButton = document.createElement("button");
//     addTaskButton.className = "add-task-button";
//     addTaskButton.id = `addTaskButton-${counter}`;
//     addTaskButton.innerHTML = "Add Task";
//     projectDiv.append(addTaskButton);

//     // const todoListOrdered = document.createElement("ol");
//     // const todoListItems = document.createElement("li");
//     // todoListItems.innerHTML = "Add task";
//     // todoListOrdered.appendChild(todoListItems);
//     // projectDiv.appendChild(todoListOrdered);

//     //reset form (must reset whole thing)
//     projectForm.reset();
//     counter++;
//   //^ I WANT TO ADD RANDOM ICONS THAT GO WITH THE TITLE
//   });
// }

//I DONT KNOW HOW TO EXPORT SO I JUST PUT IN APPJS FIRST
// import addTaskButtonFunction from "./addTaskButton.js";

// export default function createNewProject() {
//   //add counter to make each project have an individual id that increases
//   var counter = 1;
//   const projectForm = document.getElementById("project-creation-form");
//   projectForm.addEventListener("submit", (e) => {
//     //so cannot anyhow submit
//     e.preventDefault();
//     //creating new project with class name of project
//     const projectDiv = document.createElement("div");
//     projectDiv.className = "project";
//     projectDiv.id = `project-${counter}`;
//     //the new project name is now added as a project
//     const projectTitle = document.createElement("h3");
//     projectTitle.innerText = document
//       .querySelector("#project-name")
//       .value.toUpperCase();
//     projectDiv.append(projectTitle);
//     //CANNOT USE DOCUMENT.GETELEMENTSBYCLASS COS IT WILL BE ARRAY
//     const projectBody = document.getElementById("project-body");
//     projectBody.append(projectDiv);

//     // const todoListOrdered = document.createElement("ol");
//     // const todoListItems = document.createElement("li");
//     // todoListItems.innerHTML = "Add task";
//     // todoListOrdered.appendChild(todoListItems);
//     // projectDiv.appendChild(todoListOrdered);

//     //reset form (must reset whole thing)
//     projectForm.reset();
//     counter++;
//   //^ I WANT TO ADD RANDOM ICONS THAT GO WITH THE TITLE
//   addTaskButtonFunction();
//   });
// };

//FINAL VERSION NO CRAP 
import addTaskButtonFunction from "./addTaskButton.js";
import createIcons from "./createIcons.js";

(function defaultProject() {
  addTaskButtonFunction();
})();

var counter = 1;
export default function createNewProject() {
  const projectForm = document.getElementById("project-creation-form");
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.id = `project-${counter}`;
    const projectOl = document.createElement("ol");
    projectOl.id = `project-ol-${counter}`
    projectDiv.append(projectOl);

    const projectTitle = document.createElement("h3");
    projectTitle.innerText = document
      .querySelector("#project-name")
      .value.toUpperCase();
    projectDiv.append(projectTitle);

    const projectIcon = document.createElement("img");
    createIcons(projectIcon, counter);
    projectIcon.className = "project-icon";
    projectTitle.append(projectIcon);

    const projectBody = document.getElementById("project-body");
    projectBody.append(projectDiv);
    projectForm.reset();
    counter++;
  addTaskButtonFunction();
  });
};


