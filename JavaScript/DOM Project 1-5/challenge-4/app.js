const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

addBtn.addEventListener("click", ()=> {
    const inputValue = input.value.trim();
    const li = document.createElement("li");
    li.textContent = inputValue;
    taskList.appendChild(li);
    input.value = ""
})