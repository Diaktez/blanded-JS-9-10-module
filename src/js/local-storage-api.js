const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

export const localStorageApi = {
  saveTasks(tasks) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  },

  loadTasks() {
    return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  },

  saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  },

  loadTheme() {
    return localStorage.getItem(THEME_KEY) || 'light';
  },
};
