import { addTask, getTasks } from './tasks.js';
console.log("Aplicación de Gestión de Tareas v1.1.0 iniciada.");
// Versión 1.0.0
addTask("Aprender Git a fondo");
addTask("Completar la práctica de Git");
console.log("Tareas actuales:", getTasks());
addTask("Revisar la práctica");
function displayTasks() {
  console.log("--- Lista de Tareas ---");
  getTasks().forEach(task => console.log(`ID: ${task.id}, Desc: ${task.description}, Comp: ${task.completed}`));
  console.log("-----------------------");
}
export { addTask, getTasks, displayTasks };
