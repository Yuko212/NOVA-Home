document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');
    const responsavelGroup = document.getElementById('responsavel-group');

    document.getElementById("add-habitants").addEventListener("click", function() {
        // Redirecionar para cadastro.html ao clicar no botão
        window.location.href = 'cadastro.html';
    });
    
    
    function calcularIdade(dataNascimento) {
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }
        return idade;
    }

    // Evento de mudança para verificar idade após selecionar data de nascimento
    nascimentoInput.addEventListener('change', function () {
        const dataNascimento = new Date(nascimentoInput.value);
        
        // Verificação se a data é válida
        if (isNaN(dataNascimento)) {
            alert("Por favor, insira uma data de nascimento válida.");
            nascimentoInput.value = ""; // Limpa o campo de entrada
            responsavelGroup.style.display = 'none'; // Esconde o campo de responsável
            return;
        }

        const idade = calcularIdade(dataNascimento);

        // Exibe ou esconde o campo de responsável dependendo da idade
        if (idade < 18) {
            responsavelGroup.style.display = 'block';
        } else {
            responsavelGroup.style.display = 'none';
        }
    });

    // Evento de envio do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do envio
        
        // Aqui você pode adicionar validações adicionais antes de permitir o envio
        alert('Cadastro realizado com sucesso!');

        // Redirecionamento após o cadastro ser finalizado
        window.location.href = 'main.html';
    });
});
