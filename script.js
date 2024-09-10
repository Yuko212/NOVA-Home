document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');
    const responsavelGroup = document.getElementById('responsavel-group');

    document.getElementById("add-habitants").addEventListener("click", function() {
        // Ação ao clicar no botão
        alert("Adicionar Habitantes clicado!");
        // Aqui você pode adicionar uma funcionalidade para abrir um modal ou redirecionar para outra página
        // window.location.href = 'formulario_habitante.html';
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

    nascimentoInput.addEventListener('change', function () {
        const dataNascimento = new Date(nascimentoInput.value);
        
        if (isNaN(dataNascimento)) {
            alert("Por favor, insira uma data de nascimento válida.");
            nascimentoInput.value = "";
            responsavelGroup.style.display = 'none';
            return;
        }

        const idade = calcularIdade(dataNascimento);

        if (idade < 18) {
            responsavelGroup.style.display = 'block';
        } else {
            responsavelGroup.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'main.html';
    });
});
