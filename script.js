// Select elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear the current task list
    taskList.innerHTML = '';

    // Render each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const newContent = prompt('Edit task:', tasks[index]);
    if (newContent !== null) {
        tasks[index] = newContent.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Event listener for form submission
taskForm.addEventListener('submit', addTask);

// Initial render of tasks
renderTasks();
