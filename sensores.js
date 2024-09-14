// Código para sensores.html
// Funções para abrir e fechar a barra lateral
function toggleNav() {
    const sideNav = document.getElementById('side-nav');
    if (sideNav.style.width === '250px') {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    document.getElementById('side-nav').style.width = '250px';
}

function closeNav() {
    document.getElementById('side-nav').style.width = '0';
}