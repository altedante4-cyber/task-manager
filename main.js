import { addTask, getTasks } from './tasks.js';
console.log("Aplicación de Gestión de Tareas v1.0.0 iniciada.");
// Versión 1.0.0
addTask("Aprender Git a fondo");
addTask("Completar la práctica de Git");
console.log("Tareas actuales:", getTasks());
