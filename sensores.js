document.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.getElementById('side-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');

    menuToggle.addEventListener('click', () => {
        sideNav.style.width = '240px'; /* Ajuste para abrir a barra lateral */
    });

    closeBtn.addEventListener('click', () => {
        sideNav.style.width = '0'; /* Ajuste para fechar a barra lateral */
    });

    // Atualizar o valor exibido dos controles
    const updateRangeValue = (id, value) => {
        document.getElementById(id + '-value').textContent = value + '%';
    };

    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.addEventListener('input', (e) => {
            updateRangeValue(e.target.id, e.target.value);
        });
    });
});