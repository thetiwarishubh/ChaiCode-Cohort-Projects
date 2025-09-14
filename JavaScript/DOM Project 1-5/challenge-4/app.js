const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const deleteButtons = document.querySelectorAll(".delete-button");

const addTask = function () {
  const inputValue = input.value.trim();
  if(!inputValue) return alert(`Please enter a task`);

  //Create li
  const li = document.createElement("li");
  li.setAttribute("class", "task-item");

  //Create span for text
  const span = document.createElement("span");
  span.setAttribute("class", "task-text");

  //Create checkbox for task complete or not
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "complete-checkbox");

  //Create delete button for remove the tasks
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.textContent = "delete";
  console.log(deleteButton);

  const emptyTasklist = document.querySelector(".empty-list")
  if(emptyTasklist){
    emptyTasklist.remove();
  }

  li.append(checkBox);
  li.append(span);
  span.textContent = inputValue;
  li.append(deleteButton);
  taskList.appendChild(li);
  input.value = "";
};

addBtn.addEventListener("click", addTask);

const totalTasksCount = function(){
  let count = 0;

  return {
    increment : function(){
      count++;
      return count;
    },
    decrement : function(){
      count--;
      return count;
    }
  }
}

const tasks = totalTasksCount()