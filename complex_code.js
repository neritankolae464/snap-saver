// filename: complex_code.js

/*
This code demonstrates a complex and sophisticated example of a web-based task management application.
It allows users to create, update, delete, and track tasks, as well as assign them to different categories.
The application uses modern JavaScript concepts including classes, modules, and local storage.
Note: This code is simplified for clarity and may not work in a real-world production environment.
*/

// ∼∼∼ Task Class ∼∼∼
class Task {
  constructor(id, title, description, category, dueDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.dueDate = dueDate;
  }
}

// ∼∼∼ Task Manager Module ∼∼∼
const TaskManager = (() => {
  let tasks = [];

  // Private methods
  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const loadTasks = () => {
    const data = localStorage.getItem('tasks');
    tasks = data ? JSON.parse(data) : [];
  };

  // Public methods
  const getTasks = () => tasks;

  const addTask = (title, description, category, dueDate) => {
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = new Task(id, title, description, category, dueDate);
    tasks.push(newTask);
    saveTasks();
  };

  const updateTask = (id, title, description, category, dueDate) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.title = title;
      task.description = description;
      task.category = category;
      task.dueDate = dueDate;
      saveTasks();
    }
  };

  const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
  };

  const clearTasks = () => {
    tasks = [];
    saveTasks();
  };

  // Load tasks from local storage on init
  loadTasks();

  // Return public methods
  return {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
    clearTasks,
  };
})();

// ∼∼∼ Example Usage ∼∼∼
TaskManager.addTask(
  "Create complex code",
  "Generate sophisticated JavaScript code for the task management application",
  "Development",
  "2022-01-01"
);

TaskManager.updateTask(1, "Finish complex code", "", "Development", "2022-01-02");

console.log(TaskManager.getTasks());
// Output: [Task{id: 1, title: "Finish complex code", description: "", category: "Development", dueDate: "2022-01-02"}]

TaskManager.deleteTask(1);

console.log(TaskManager.getTasks());
// Output: []

TaskManager.clearTasks();

console.log(TaskManager.getTasks());
// Output: []

// More code can be added below...

// End of code