document.addEventListener('DOMContentLoaded', function () {
    // Código para cadastro.html
    const cadastroForm = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');
    const responsavelGroup = document.getElementById('responsavel-group');
    const adultoSelect = document.getElementById('adulto');
    const avisoResponsaveis = document.getElementById('aviso-responsaveis');

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
        const idade = calcularIdade(dataNascimento);

        // Mostrar campo de responsável se menor de 18 anos
        if (idade < 18) {
            responsavelGroup.style.display = 'block';
            carregarResponsaveis(); // Carregar responsáveis quando necessário
        } else {
            responsavelGroup.style.display = 'none';
            avisoResponsaveis.style.display = 'none'; // Esconder aviso se não for necessário
        }
    }

    // Função para carregar responsáveis
    function carregarResponsaveis() {
        // Obter usuários do localStorage
        const responsaveis = [];
        for (let i = 0; i < 5; i++) {
            const nome = localStorage.getItem(`nome${i}`);
            const nascimento = localStorage.getItem(`nascimento${i}`);
            const idade = calcularIdade(new Date(nascimento));

            if (nome && idade >= 18) {
                responsaveis.push({ id: i, nome });
            }
        }

        // Adicionar opções ao select
        adultoSelect.innerHTML = '<option value="">Selecione um responsável</option>'; // Resetar opções
        responsaveis.forEach(responsavel => {
            const option = document.createElement('option');
            option.value = responsavel.id;
            option.textContent = responsavel.nome;
            adultoSelect.appendChild(option);
        });

        // Mostrar aviso se não houver responsáveis
        if (responsaveis.length === 0) {
            avisoResponsaveis.style.display = 'block';
        } else {
            avisoResponsaveis.style.display = 'none';
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
            const adulto = document.getElementById('adulto').value;

            if (!nome || !email || !telefone) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Verificar se é menor de idade e se um responsável foi selecionado
            if (document.getElementById('nascimento').value && calcularIdade(new Date(document.getElementById('nascimento').value)) < 18) {
                if (!adulto) {
                    alert('Por favor, selecione um responsável.');
                    return;
                }
            }

            // Redirecionamento após o cadastro ser finalizado
            window.location.href = 'persona.html';
        });
    }

    // Código para persona.html
    const personaForm = document.getElementById('personalizacaoForm');
    const apelidoInput = document.getElementById('apelido');
    const fotoInput = document.getElementById('foto');
    const previewImagem = document.getElementById('preview');

    // Função para atualizar a pré-visualização da foto
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

    // Evento de envio do formulário de personalização
    if (personaForm) {
        personaForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do envio

            const apelido = apelidoInput.value.trim();
            const foto = fotoInput.files[0];

            if (!apelido) {
                alert('Por favor, insira um apelido.');
                return;
            }

            // Salvar dados no localStorage
            const usuarioIndex = localStorage.getItem('usuarioIndex');
            if (usuarioIndex !== null) {
                localStorage.setItem(`apelido${usuarioIndex}`, apelido);
                if (foto) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        localStorage.setItem(`foto${usuarioIndex}`, e.target.result);
                    };
                    reader.readAsDataURL(foto);
                }
            }

            alert('Personalização concluída!');
            window.location.href = 'index.html';
        });
    }
});
