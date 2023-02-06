// //MUST IMPORT WITH .JS AT THE END 
// //Don't use curly braces when importing default exports, and use curly braces when importing named exports.
// import createNewProject from "./components/createNewProject.js";
// // import addTaskButtonFunction from "./components/addTaskButton.js";
// import createToDo from "./components/tasks.js";
// createNewProject();
// addTaskButtonFunction();

// // CANT USE THIS BECAUSE NEW PROJECTS WONT BE ADDED
// // const projectClass = document.getElementsByClassName("project");
// // const todoListOrdered = document.createElement("ol");
// // const todoListItems = document.createElement("li");
// // todoListItems.innerHTML = "Add tasks";
// // todoListOrdered.appendChild(todoListItems);
// // for (let i = 0; i < projectClass.length; i++) {
// //     projectClass[i].appendChild(todoListOrdered);
// // }

// // hardcoded fix 
// // const defaultProject = document.getElementById("default-project");
// // const todoListOrdered = document.createElement("ol");
// // const todoListItems = document.createElement("li");
// // todoListItems.innerHTML = "Add task";
// // todoListOrdered.appendChild(todoListItems);
// // defaultProject.appendChild(todoListOrdered);

// // this part works 
// const defaultProject = document.getElementById("default-project");
// const addTaskButton = document.createElement("button");
//     addTaskButton.className = "add-task-button";
//     addTaskButton.id = 'addTaskButton';
//     addTaskButton.innerHTML = "Add Task";
//     defaultProject.append(addTaskButton);
// //     addTaskButton.addEventListener('click', (e) => {
// //             console.log(e.target.id);
// //             console.log("ok");
// //             createToDo("title", "description", "dueDate", "priority");
// //             console.log("done");
// //         });

// function addTaskButtonFunction() {
//     //queryselector doesnt seem to work, because not live?
//     const getAllAddTaskButton = document.getElementsByClassName('add-task-button');
//     console.log(getAllAddTaskButton);
//     Array.from(getAllAddTaskButton).forEach((button) => {
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

// // const projects = document.getElementsByClassName("projects");
// // const newProject = document.getElementsByName("project-name");
// // projectForm.addEventListener('Submit', event => {
// //     event.preventDefault();
// //     projects.appendChild(newProject.value);
// //     alert("appended");
// // });

// // const list = document.createElement("li");

// // const project = document.createElement('div');
// // projects.classList.add(project);

// //helpful links: https://github.com/jwern/todo-list
// //https://www.youtube.com/watch?v=MkESyVB4oUw
// //https://www.youtube.com/watch?v=P-jKHhr6YxI
// //will look into: addeventlistener function, form validation, .map and array functions

// //when submitting the button, new project is created with designated name
// function createNewProject() {
//     //add counter to make each project have an individual id that increases
//     var counter = 1;
//     const projectForm = document.getElementById("project-creation-form");
//     projectForm.addEventListener("submit", (e) => {
//       //so cannot anyhow submit
//       e.preventDefault();
//       //creating new project with class name of project
//       const projectDiv = document.createElement("div");
//       projectDiv.className = "project";
//       projectDiv.id = `project-${counter}`;
//       //the new project name is now added as a project
//       const projectTitle = document.createElement("h3");
//       projectTitle.innerText = document
//         .querySelector("#project-name")
//         .value.toUpperCase();
//       projectDiv.append(projectTitle);
//       //CANNOT USE DOCUMENT.GETELEMENTSBYCLASS COS IT WILL BE ARRAY
//       const projectBody = document.getElementById("project-body");
//       projectBody.append(projectDiv);
  
//       // const todoListOrdered = document.createElement("ol");
//       // const todoListItems = document.createElement("li");
//       // todoListItems.innerHTML = "Add task";
//       // todoListOrdered.appendChild(todoListItems);
//       // projectDiv.appendChild(todoListOrdered);
  
//       //reset form (must reset whole thing)
//       projectForm.reset();
//       counter++;
//     //^ I WANT TO ADD RANDOM ICONS THAT GO WITH THE TITLE
//     addTaskButtonFunction();
//     });
//   };

  // var buttonCounter = 1;
  // function addTaskButtonFunction() {
  //   //queryselector doesnt seem to work, because not live?
  //   //button to add task
  //   const addTaskButton = document.createElement("button");
  //   addTaskButton.className = "add-task-button";
  //   addTaskButton.id = `addTaskButton-${buttonCounter}`;
  //   addTaskButton.innerHTML = "Add Task";
  //   const projectDivID = document.getElementById(`project-${buttonCounter}`);
  //   // getAllProjectDiv.append(addTaskButton);
  //   // const getAllAddTaskButton = document.getElementsByClassName('add-task-button');
  //   //array.from doesnt work 
  //   // console.log(Array.from(getAllAddTaskButton));
  //   // Array.from(getAllAddTaskButton).forEach((button) => {
  //   //     button.addEventListener('click', (e) => {
  //   //         console.log(e.target.id);
  //   //         console.log("ok");
  //   //     });
  //   // });
  //   // console.log(getAllProjectDiv.length);
  //   // for (var i = 0; i < getAllProjectDiv.length; i++) {
  //   //     getAllProjectDiv[i].append(addTaskButton);
  //   //     addTaskButton.addEventListener('click', (e) => {
  //   //         console.log("ok");
  //   //     });
  //   // }
  //   //problem now is that it is an array 
  //   // this part onwards doesnt work 
  //   // for (let i = 0; i < addTaskButton.length; i++) {
  //   // addTaskButton.addEventListener('onclick', createToDo('title', 'description', 'dueDate', 'priority'));
  //   projectDivID.append(addTaskButton);
  //   console.log("done");
  //   buttonCounter++;
  //   console.log(buttonCounter);
  // };

  import createNewProject from "./components/createNewProject.js";
  createNewProject();

  