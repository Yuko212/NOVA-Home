// Função para atualizar a pré-visualização da foto
function atualizarPreviewFoto() {
    const fotoInput = document.getElementById('foto');
    const previewImagem = document.getElementById('preview');

    if (fotoInput && previewImagem) {
        fotoInput.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    previewImagem.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Função para exibir os habitantes armazenados
function exibirHabitantes() {
    const profileSection = document.getElementById('profile-section');
    profileSection.innerHTML = ''; // Limpa o container antes de adicionar as novas fotos

    // Loop para buscar e exibir as fotos e nomes dos habitantes
    for (let i = 0; i < 5; i++) {
        const photo = localStorage.getItem(`foto${i}`);
        const name = localStorage.getItem(`apelido${i}`);
        if (photo && name) {
            const div = document.createElement('div');
            div.style.textAlign = 'center'; // Centraliza o nome abaixo da foto
            div.innerHTML = `
                <img class="profile-pic" src="${photo}" alt="Foto de Perfil">
                <div class="user-name">${name}</div>
            `;
            profileSection.appendChild(div);
        } else {
            console.log(`Nenhuma foto encontrada para o índice ${i}`);
        }
    }
}

// Inicializa a exibição de habitantes e a pré-visualização da foto
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página carregada. Inicializando funções de foto...');
    exibirHabitantes();
    atualizarPreviewFoto();
});
