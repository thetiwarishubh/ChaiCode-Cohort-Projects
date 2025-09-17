const inputTask = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addButton");
const taskContainers = document.getElementById("taskList");
const totalTasksCount = document.getElementById("totalTasks");
const completedTasksCount = document.getElementById("completedTasks");

const totalTasks = function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return (totalTasksCount.textContent = `Total tasks: ${count}`);
    },
    decrement: function () {
      count--;
      return (totalTasksCount.textContent = `Total tasks: ${count}`);
    },
  };
};
const totalTasksUpdate = totalTasks();

const completedTasks = function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return (completedTasksCount.textContent = `Total tasks: ${count}`);
    },
    decrement: function () {
      count--;
      return (completedTasksCount.textContent = `Total tasks: ${count}`);
    },
  };
};

const completedTasksUpdate = completedTasks();

const addTask = function () {
  const inputValue = inputTask.value.trim();
  if (inputValue === "") {
    alert(`Please Enter a Task!😣`);
  } else {
    const li = document.createElement("li");
    li.setAttribute("class", "task-item");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("class", "complete-checkbox");
    li.appendChild(checkBox);

    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        completedTasksUpdate.increment();
        totalTasksUpdate.decrement();
      } else {
        totalTasksUpdate.increment();
        completedTasksUpdate.decrement();
      }
    });

    const span = document.createElement("span");
    span.setAttribute("class", "task-text");
    span.append(inputValue);
    li.appendChild(span);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "delete-button");
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", (e) => {
      if (e.target) {
        li.remove();
        if (checkBox.checked) {
          completedTasksUpdate.decrement();
        } else {
          totalTasksUpdate.decrement();
        }
      }
    });

    taskContainers.appendChild(li);

    totalTasksUpdate.increment();
  }

  inputTask.value = "";
};

addTaskButton.addEventListener("click", addTask);
