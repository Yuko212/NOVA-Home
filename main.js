document.addEventListener('DOMContentLoaded', function () {
    const sideNav = document.getElementById('side-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');

    // Função para abrir a barra lateral
    menuToggle.addEventListener('click', function () {
        sideNav.style.width = '250px'; // Abre a barra lateral
    });

    // Função para fechar a barra lateral
    closeBtn.addEventListener('click', function () {
        sideNav.style.width = '0'; // Fecha a barra lateral
    });
});
