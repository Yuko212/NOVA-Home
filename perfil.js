// Código para perfil.html
const perfilForm = document.getElementById('perfilForm');

if (perfilForm) {
    perfilForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do envio

        const apelido = document.getElementById('apelido').value.trim();
        const fotoInput = document.getElementById('foto');
        const foto = fotoInput.files[0];
        const senhaInput = document.getElementById('senha'); // Campo de senha
        const senha = senhaInput ? senhaInput.value.trim() : ''; // Campo de senha (opcional)

        if (!apelido || (foto && !senha)) {
            alert('Por favor, preencha todos os campos obrigatórios e selecione uma foto.');
            return;
        }

        // Salvando dados no localStorage
        localStorage.setItem('apelido', apelido);

        // Para salvar a foto, você pode converter a foto em uma URL de dados e salvar no localStorage
        if (foto) {
            const reader = new FileReader();
            reader.onload = function(event) {
                localStorage.setItem('foto', event.target.result);
            };
            reader.readAsDataURL(foto);
        }

        alert('Informações salvas com sucesso!');
    });
}

// Exibir imagem de pré-visualização quando a foto é selecionada
document.getElementById('foto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fotoPreview = document.getElementById('fotoPreview');
            fotoPreview.src = e.target.result;
            fotoPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
