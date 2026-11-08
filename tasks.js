const tasks = [];

function addTask(description) {
  tasks.push({ id: tasks.length + 1, description, completed: false });
  console.log(`Tarea "${description}" añadida.`);
}

function getTasks() {
  return tasks;
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index > -1) {
    tasks.splice(index, 1);
    console.log(`Tarea con ID ${id} eliminada.`);
  } else {
    console.log(`Tarea con ID ${id} no encontrada.`);
  }
}

export { addTask, getTasks, deleteTask, displayTasks };
