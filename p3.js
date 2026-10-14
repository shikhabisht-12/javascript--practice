let tasks = [];
let taskId = 1;

function addTask() {
    let input = document.getElementById("taskInput");
    let taskName = input.value.trim();

    if (taskName === "") {
        document.getElementById("message").textContent =
            "Please enter a task!";
        return;
    }

    let task = {
        id: taskId++,
        name: taskName,
        completed: false,
        priority: "Medium"
    };

    tasks.push(task);
    input.value = "";

    displayTasks();
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let completedCount = 0;

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        let li = document.createElement("li");
        li.textContent = `${task.id}. ${task.name} - ${
            task.completed ? "Completed" : "Pending"
        } - Priority: ${task.priority}`;

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.onclick = function () {
            completeTask(task.id);
        };

        let deleteBtn = document.createElement("button");
        deleteBtn