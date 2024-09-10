document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');

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

        if (!nome || !email || !telefone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Salvando dados no localStorage
        let habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];
        habitantes.push({ nome, email, telefone });
        localStorage.setItem('habitantes', JSON.stringify(habitantes));

        // Redireciona diretamente para persona.html após salvar os dados
        window.location.href = 'persona.html'; // Redireciona para persona.html
    });
}

// Código para index.html
const profilesContainer = document.getElementById('profiles-container');

    // Exibir a lista de habitantes
    const habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];
    if (habitantes.length > 0) {
        habitantes.forEach((habitante, index) => {
            const profileSection = document.createElement('div');
            profileSection.classList.add('profile-section');

            const img = document.createElement('img');
            img.src = habitante.foto || 'default-profile.png'; // Usar uma imagem padrão caso não haja foto
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
    } else {
        profilesContainer.innerHTML = 'Nenhum habitante cadastrado.';
    }
});

    // Adicionando a função para carregar a foto corretamente em persona.html
document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');

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

    const removeButton = document.getElementById('remove-habitants');
if (removeButton) {
    removeButton.addEventListener('click', function () {
        const senha = prompt('Digite a senha para confirmar a remoção:');
        const senhaCerta = localStorage.getItem('senha'); // Recuperar a senha armazenada

        if (senha === senhaCerta) {
            const selectedIndex = localStorage.getItem('selectedIndex');
            if (selectedIndex !== null) {
                let habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];
                habitantes.splice(selectedIndex, 1);
                localStorage.setItem('habitantes', JSON.stringify(habitantes));
                window.location.reload(); // Recarrega a página para atualizar a lista
            }
        } else {
            alert('Senha incorreta.');
        }
    });
}

});
