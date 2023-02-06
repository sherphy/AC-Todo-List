import inputTasksIntoContainer from "./inputTasks.js";

export default function submitTasks(submitButton,taskTitle,taskInput,
    descInput,dateInput,priorityInput, counter) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const title = taskInput.value;
    const desc = descInput.value;
    const date = new Date(dateInput.value);
    const dateYear = date.getFullYear();
    const dateMonth = date.getMonth() + 1;
    const dateDay = date.getDate();
    const priority = priorityInput.value;

    const addTaskButton = document.getElementById(`addTaskButton-${counter}`);
    inputTasksIntoContainer(title, desc, dateYear, dateMonth, dateDay, priority, counter);
    // taskTitle.submit();
    //then put all these values in a new task, which is then added to project container
  });
}
