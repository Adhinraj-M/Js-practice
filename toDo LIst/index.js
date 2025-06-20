"use strict";

const inputText = document.getElementById("input-text");
const ulTag = document.querySelector("ul");

function addNewList() {
  const newTask = inputText.value;
  if (!newTask) {
    return console.log("Please enter any task !");
  }
  let getAllTask = JSON.parse(localStorage.getItem("allTasks")) || [];
  getAllTask.push(newTask);
  localStorage.setItem("allTasks", JSON.stringify(getAllTask));
  inputText.value = "";
  newTaskCreation(getAllTask);
}

function newTaskCreation(task) {
  ulTag.innerHTML = "";
  task.forEach((item, index) => {
    const newLi = document.createElement("li");
    newLi.className = "new-task";
    newLi.innerHTML = `<span class="text"> ${item} </span>`;
    ulTag.appendChild(newLi);
    const deletBtn = document.createElement("button");
    deletBtn.className = "delete-btn";
    (deletBtn.textContent = "X"),
      deletBtn.addEventListener("click", () => {
        removeTask( index);
      });
    newLi.appendChild(deletBtn);
  });
}

function removeTask( index) {
  let tasks = JSON.parse(localStorage.getItem("allTasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("allTasks", JSON.stringify(tasks));
  newTaskCreation(tasks);
}

function clearAll() {
  localStorage.clear();
  location.reload();
}
