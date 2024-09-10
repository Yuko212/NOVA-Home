document.addEventListener('DOMContentLoaded', function () {
    // Código existente para cadastro.html
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

            // Redirecionamento após o cadastro ser finalizado
            window.location.href = 'persona.html';
        });
    }

    // Código para persona.html
    const personaForm = document.getElementById('personalizacaoForm');

    if (personaForm) {
        personaForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do envio

            const apelido = document.getElementById('apelido').value.trim();
            const fotoInput = document.getElementById('foto');
            const foto = fotoInput.files[0];
            const senhaInput = document.getElementById('senha'); // Novo campo de senha
            const senha = senhaInput ? senhaInput.value.trim() : ''; // Novo campo de senha (opcional)

            if (!apelido || !foto || !senha) {
                alert('Por favor, preencha todos os campos obrigatórios e selecione uma foto.');
                return;
            }

            // Salvando dados no localStorage
            localStorage.setItem('apelido', apelido);
            localStorage.setItem('senha', senha); // Salvando a senha

            // Para salvar a foto, você pode converter a foto em uma URL de dados e salvar no localStorage
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('foto', e.target.result);
                console.log('Foto salva no localStorage e redirecionando para main.html');
                // Redirecionamento para main.html após salvar
                window.location.href = 'main.html';
            };
            reader.onerror = function(e) {
                console.error('Erro ao ler o arquivo de imagem:', e);
            };
            reader.readAsDataURL(foto);
        });
    }
});
