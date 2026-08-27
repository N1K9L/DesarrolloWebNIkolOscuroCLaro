document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // 1. Obtener tema guardado (o por defecto 'light')
    const savedLocalTheme = localStorage.getItem('user-theme');
    const savedSessionTheme = sessionStorage.getItem('current-session-theme');
    const activeTheme = savedLocalTheme || savedSessionTheme || 'light';

    // Aplicar tema inicial
    applyTheme(activeTheme);

    // 2. Escuchar el evento de click en el botón
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const newTheme = isDarkMode ? 'light' : 'dark';

            applyTheme(newTheme);

            // Guardar en Web Storage
            localStorage.setItem('user-theme', newTheme);
            sessionStorage.setItem('current-session-theme', newTheme);
        });
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.textContent = 'Modo Claro';
            themeToggleBtn.classList.replace('btn-outline-light', 'btn-outline-warning');
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleBtn.textContent = 'Modo Oscuro';
            themeToggleBtn.classList.replace('btn-outline-warning', 'btn-outline-light');
        }
    }
});