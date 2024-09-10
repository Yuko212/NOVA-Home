document.addEventListener('DOMContentLoaded', function () {
    // Código para cadastro.html
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
        const idade = calcularIdade(dataNascimento);

        // Mostrar campo de responsável se menor de 18 anos
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
    const nomeInput = document.getElementById('nome');
    const fotoInput = document.getElementById('foto');
    const previewImagem = document.getElementById('preview');

    // Função para atualizar a pré-visualização da foto
    if (fotoInput && previewImagem) {
        fotoInput.addEventListener('change', function () {
            const arquivo = fotoInput.files[0];
            if (arquivo) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    previewImagem.src = e.target.result;
                }
                reader.readAsDataURL(arquivo);
            }
        });
    }

    // Evento de envio do formulário de personalização
    if (personaForm) {
        personaForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do envio

            const nome = document.getElementById('nome').value.trim();
            const foto = document.getElementById('foto').files[0];

            if (!nome || !foto) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Salvar as informações no localStorage
            for (let i = 0; i < 5; i++) {
                if (!localStorage.getItem(`apelido${i}`)) {
                    localStorage.setItem(`apelido${i}`, nome);
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        localStorage.setItem(`foto${i}`, e.target.result);
                        window.location.href = 'index.html'; // Redireciona para a página inicial após salvar
                    }
                    reader.readAsDataURL(foto);
                    break;
                }
            }
        });
    }
});
