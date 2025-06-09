import { localStorageApi } from './local-storage-api.js';

let tasks = localStorageApi.loadTasks();

export function getTasks() {
  return tasks;
}

export function addTask(title, description) {
  const newTask = {
    id: Date.now().toString(),
    title,
    description,
  };
  tasks.push(newTask);
  localStorageApi.saveTasks(tasks);
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  localStorageApi.saveTasks(tasks);
}
