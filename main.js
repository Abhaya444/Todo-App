var form = document.getElementById("new-task-form");
var input = document.getElementById("new-task-input");
var tasks = document.getElementById("tasks");
var taskCount = document.getElementById("task-count");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var text = input.value;
  input.value = "";

  if (text) {
    var task = createTask(text);
    tasks.appendChild(task);
    updateCount();
  } else {
    alert("Please enter a task."); //show an alert if the the task is empty
  }
});

function createTask(text) {
  var task = document.createElement("div");
  task.className = "task";

  var content = document.createElement("div");
  content.className = "content";

  var taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.className = "text";
  taskInput.value = text;
  taskInput.readOnly = true;
  content.appendChild(taskInput);

  var actions = document.createElement("div");
  actions.className = "actions";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "complete-check";
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      task.classList.add("completed");
      
    } else {
      task.classList.remove("completed");
    }
    updateCount();
  });
  actions.appendChild(checkbox);

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", function () {
    tasks.removeChild(task);
    updateCount();
  });
  actions.appendChild(deleteButton);

  task.appendChild(content);
  task.appendChild(actions);

  return task;
}

function updateCount() {
  var count = tasks.getElementsByClassName("task").length;
  var completedCount = tasks.getElementsByClassName("completed").length;

  taskCount.innerText = count + " tasks, " + completedCount + " completed";

  if (count === 0) {
    alert("All tasks have been deleted.");
  }
}
