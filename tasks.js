const tasks = [];

function addTask(description) {
  tasks.push({ id: tasks.length + 1, description, completed: false });
  console.log(`Tarea "${description}" añadida.`);
}

function getTasks() {
  return tasks;
}

export { addTask, getTasks };
