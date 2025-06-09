/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import { refs } from './js/refs.js';
import { addTask } from './js/tasks.js';
import { renderTasks } from './js/render-tasks.js';
import { initThemeSwitcher } from './js/theme-switcher.js';

document.addEventListener('DOMContentLoaded', () => {
  // Применяем сохранённую тему и запускаем переключатель
  initThemeSwitcher(refs.themeToggleBtn, refs.body);

  // Рендерим задачи
  renderTasks();
});

// Обработка формы
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const title = refs.nameInput.value.trim();
  const description = refs.descInput.value.trim();
  if (!title || !description) return;

  addTask(title, description);
  renderTasks();
  refs.nameInput.value = '';
  refs.descInput.value = '';
});
