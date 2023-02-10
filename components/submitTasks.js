import inputTasksIntoContainer from "./inputTasks.js";

export default function submitTasks(submitButton,taskInput,
    descInput,dateInput,priorityInput,counter) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const title = taskInput.value;
    const desc = descInput.value;
    
    const{dateYear, dateMonth, dateDay} = dateConversion(dateInput);
    
    const priority = priorityInput;

    inputTasksIntoContainer(title, desc, dateYear, dateMonth, dateDay, priority, counter);
    //then put all these values in a new task, which is then added to project container
  });
}

export function dateConversion(dateInput) {
    let dateYear;
    let dateMonth;
    let dateDay;
    if (dateInput.value === "") {
      dateYear = "";
      dateMonth = "";
      dateDay = "";
    } else {
      const date = new Date(dateInput.value);
      dateYear = date.getFullYear();
      dateMonth = date.getMonth() + 1;
      dateDay = date.getDate();
    }
    return {
      dateYear, dateMonth, dateDay
    }
}