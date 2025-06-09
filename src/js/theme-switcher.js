const THEME_KEY = 'theme';
const LIGHT = 'theme-light';
const DARK = 'theme-dark';

export function initThemeSwitcher(button, body) {
  applySavedTheme(body);

  button.addEventListener('click', () => {
    const isDark = body.classList.contains(DARK);

    // Удаляем оба класса, потом добавим нужный
    body.classList.remove(DARK, LIGHT);
    const newTheme = isDark ? LIGHT : DARK;
    body.classList.add(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
}

function applySavedTheme(body) {
  const saved = localStorage.getItem(THEME_KEY) || 'theme-light';
  body.classList.remove('theme-light', 'theme-dark');
  body.classList.add(saved);
}
