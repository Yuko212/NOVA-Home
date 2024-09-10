document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');
    const responsavelGroup = document.getElementById('responsavel-group');

    // Função para redirecionar do index.html para cadastro.html
    const addHabitantsButton = document.getElementById('add-habitants');
    if (addHabitantsButton) {
        addHabitantsButton.addEventListener('click', function() {
            window.location.href = 'cadastro.html';
        });
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

        // Ajustar idade caso o mês atual seja antes do mês de nascimento
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        // Mostrar campo de responsável se menor de 18 anos
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
            event.preventDefault(); // Previne o comportamento padrão do envio

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

            // Redirecionamento após o cadastro ser finalizado
            window.location.href = 'index.html';
        });
    }

    // Código para index.html
    const profilePic = document.getElementById('profile-pic');
    const userName = document.getElementById('user-name');

    // Exibir a lista de habitantes
    const habitantes = JSON.parse(localStorage.getItem('habitantes')) || [];
    if (habitantes.length > 0) {
        userName.textContent = 'Habitantes Cadastrados:';
        let habitantesList = '<ul>';
        habitantes.forEach(habitante => {
            habitantesList += `<li>${habitante.nome} (${habitante.email}, ${habitante.telefone})</li>`;
        });
        habitantesList += '</ul>';
        userName.innerHTML = habitantesList;
    } else {
        userName.textContent = 'Nenhum habitante cadastrado.';
    }
});
