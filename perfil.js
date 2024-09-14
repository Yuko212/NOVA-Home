document.addEventListener('DOMContentLoaded', function() {
    const perfilForm = document.getElementById('perfilForm');
    const apelidoInput = document.getElementById('apelido');
    const fotoInput = document.getElementById('foto');
    const fotoPreview = document.getElementById('fotoPreview');
    const senhaInput = document.getElementById('senha');

    // Carregar dados do localStorage
    function loadProfile() {
        const apelido = localStorage.getItem('apelido') || '';
        const foto = localStorage.getItem('foto') || '';
        const senha = localStorage.getItem('senha') || '';

        apelidoInput.value = apelido;
        senhaInput.value = senha;

        if (foto) {
            fotoPreview.src = foto;
            fotoPreview.style.display = 'block';
        }
    }

    loadProfile();

    perfilForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do envio

        const apelido = apelidoInput.value.trim();
        const fotoFile = fotoInput.files[0];
        const senha = senhaInput.value.trim();

        if (!apelido || !senha) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Salvando dados no localStorage
        localStorage.setItem('apelido', apelido);
        localStorage.setItem('senha', senha);

        // Atualizando a foto de perfil se uma nova for selecionada
        if (fotoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('foto', e.target.result);
                fotoPreview.src = e.target.result;
                fotoPreview.style.display = 'block';
            };
            reader.onerror = function(e) {
                console.error('Erro ao ler o arquivo de imagem:', e);
            };
            reader.readAsDataURL(fotoFile);
        }

        alert('Perfil atualizado com sucesso!');
    });
});
