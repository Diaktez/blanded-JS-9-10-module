// import { refs } from './refs.js';
// import { getTasks, deleteTask } from './tasks.js';

// export function renderTasks() {
//   refs.taskList.innerHTML = '';

//   getTasks().forEach(task => {
//     const li = document.createElement('li');
//     li.className = 'task-list-item';
//     li.innerHTML = `
//       <button class="task-list-item-btn">Delete</button>
//       <h3>${task.title}</h3>
//       <p>${task.description}</p>
//     `;

//     li.querySelector('button').addEventListener('click', () => {
//       deleteTask(task.id);
//       renderTasks();
//     });

//     refs.taskList.appendChild(li);
//   });
// }

import { refs } from './refs.js';
import { getTasks, deleteTask } from './tasks.js';

export function renderTasks() {
  refs.taskList.innerHTML = '';

  getTasks().forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-list-item';
    li.innerHTML = `
      <button class="task-list-item-btn">×</button>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    `;

    li.querySelector('button').addEventListener('click', () => {
      deleteTask(task.id);
      renderTasks();
    });

    refs.taskList.appendChild(li);
  });
}
