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

// Função para carregar a imagem selecionada e trocar o avatar do usuário
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}
