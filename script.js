document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');
    const personalizacaoForm = document.getElementById('personalizacaoForm'); // Formulário de personalização

    // Função para redirecionar do index.html para cadastro.html
    const addHabitantsButton = document.getElementById('add-habitants');
    if (addHabitantsButton) {
        addHabitantsButton.addEventListener('click', function () {
            window.location.href = 'cadastro.html';
        });
    }

    // Função para remover um habitante específico
    function removerHabitante(index) {
        let habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];
        if (habitantes.length > index) {
            habitantes.splice(index, 1); // Remove o habitante pelo índice
            localStorage.setItem('habitantes', JSON.stringify(habitantes)); // Atualiza o localStorage
            window.location.reload(); // Recarrega a página para refletir as alterações
        }
    }

    // Função para calcular a idade
    function calcularIdade(dataNascimento) {
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }
        return idade;
    }

    // Função para verificar a idade e mostrar/esconder o campo de responsável
    function verificarIdade() {
        const nascimento = document.getElementById('nascimento').value;
        const dataNascimento = new Date(nascimento);
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        const responsavelGroup = document.getElementById('responsavel-group');
        if (idade < 18) {
            responsavelGroup.style.display = 'block';
        } else {
            responsavelGroup.style.display = 'none';
        }
    }

    // Adicionar evento para verificar idade ao mudar a data de nascimento
    if (nascimentoInput) {
        nascimentoInput.addEventListener('change', verificarIdade);
    }

    // Evento de envio do formulário de cadastro
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const foto = document.getElementById('foto').value.trim(); // Assume que o usuário insere um URL de foto

            if (!nome || !email || !telefone || !foto) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Salvando dados no localStorage
            let habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];
            habitantes.push({ nome, email, telefone, foto });
            localStorage.setItem('habitantes', JSON.stringify(habitantes));

            // Remova o preventDefault e utilize um timeout para garantir que os dados sejam salvos antes do redirecionamento
            setTimeout(function () {
                window.location.href = 'persona.html'; // Redireciona para persona.html
            }, 100); // Pequeno atraso para garantir o salvamento no localStorage
        });
    }

    // Exibir a lista de habitantes no index.html
    const profilesContainer = document.getElementById('profiles-container');
    const habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];

    if (profilesContainer && habitantes.length > 0) {
        habitantes.forEach((habitante, index) => {
            const profileSection = document.createElement('div');
            profileSection.classList.add('profile-section');

            const img = document.createElement('img');
            img.src = habitante.foto;
            img.alt = `Foto de ${habitante.nome}`;
            img.classList.add('profile-pic');
            img.addEventListener('click', function () {
                window.location.href = 'login.html'; // Redireciona para login.html ao clicar na imagem
            });

            const name = document.createElement('div');
            name.classList.add('user-name');
            name.textContent = habitante.nome;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.classList.add('btn');
            removeButton.style.backgroundColor = '#f28d8d'; // Cor de remover
            removeButton.style.color = 'white';
            removeButton.addEventListener('click', function () {
                removerHabitante(index); // Remove o habitante com base no índice
            });

            profileSection.appendChild(img);
            profileSection.appendChild(name);
            profileSection.appendChild(removeButton);

            profilesContainer.appendChild(profileSection);
        });
    } else if (profilesContainer) {
        profilesContainer.innerHTML = 'Nenhum habitante cadastrado.';
    }

    // Evento de envio do formulário de personalização (persona.html)
    if (personalizacaoForm) {
        personalizacaoForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const apelido = document.getElementById('apelido').value.trim();
            const fotoFile = document.getElementById('foto').files[0];
            const senha = document.getElementById('senha').value.trim();

            if (!apelido || !fotoFile || !senha) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function () {
                const fotoUrl = reader.result; // Converte a imagem para URL base64

                // Atualizando o perfil no localStorage
                let habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];
                if (habitantes.length > 0) {
                    // Atualizando o último habitante cadastrado
                    habitantes[habitantes.length - 1].foto = fotoUrl;
                    habitantes[habitantes.length - 1].apelido = apelido; // Salva o apelido

                    localStorage.setItem('habitantes', JSON.stringify(habitantes));
                }

                // Redireciona para index.html
                setTimeout(function () {
                    window.location.href = 'index.html';
                }, 100); // Pequeno atraso para garantir o salvamento no localStorage
            };

            reader.readAsDataURL(fotoFile); // Lê o arquivo de imagem
        });
    }
});
