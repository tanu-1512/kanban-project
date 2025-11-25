// Modal Controls
const addTaskBtn = document.getElementById("addTaskBtn");
const taskModal = document.getElementById("taskModal");
const cancelModal = document.getElementById("cancelModal");
const saveTask = document.getElementById("saveTask");

const titleInput = document.getElementById("taskTitle");
const descInput = document.getElementById("taskDesc");

addTaskBtn.onclick = () => {
  taskModal.classList.remove("hidden");
};

cancelModal.onclick = () => {
  taskModal.classList.add("hidden");
};

// Save task
saveTask.onclick = () => {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  if (!title) return alert("Task title required!");

  createTask(title, desc);
  taskModal.classList.add("hidden");

  titleInput.value = "";
  descInput.value = "";
};

// Create task element
function createTask(title, desc) {
  const task = document.createElement("div");
  task.className = "task";
  task.draggable = true;

  task.innerHTML = `
    <h4>${title}</h4>
    <p>${desc}</p>
  `;

  task.addEventListener("dragstart", dragStart);

  document.getElementById("todo").appendChild(task);
}

// Drag & Drop Logic
let draggedTask = null;

function dragStart() {
  draggedTask = this;
}

document.querySelectorAll(".task-container").forEach(container => {
  container.addEventListener("dragover", (e) => e.preventDefault());
  container.addEventListener("drop", function () {
    this.appendChild(draggedTask);
  });
});