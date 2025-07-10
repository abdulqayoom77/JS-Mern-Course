const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-button");
const list = document.getElementById("todo-list");
const charCount = document.getElementById("char-count");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

window.onload = () => {
  todos.sort((a, b) => new Date(b.time) - new Date(a.time));
  todos.forEach((todo) => addTodoToDOM(todo.text, todo.time, todo.isCompleted));
};

input.addEventListener("input", () => {
  charCount.textContent = `${input.value.length} / 100`;
});

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  console.log(task);
  const timestamp = new Date().toISOString();
  addTodoToDOM(task, timestamp);
  todos.push({
    text: task,
    time: timestamp,
    isCompleted: false,
  });
  updateLocalStorage();
  input.value = "";
  charCount.textContent = "0 / 100";
});

function addTodoToDOM(taskText, timeStamp, isCompleted = false) {
  const li = document.createElement("li");
  if (isCompleted == true) li.classList.add("completed");

  const main = document.createElement("div");
  main.className = "task-main";

  const task = document.createElement("span");
  task.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete🚮";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const index = Array.from(list.children).indexOf(li);
    todos.splice(index, 1);
    li.remove();
    updateLocalStorage();
  });

  const time = document.createElement("div");
  time.className = "task-time";
  time.textContent = formatDate(timeStamp);

  main.appendChild(task);
  main.appendChild(delBtn);
  li.appendChild(main);
  li.appendChild(time);
  list.appendChild(li);
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}
