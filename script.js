document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');
    const responsavelGroup = document.getElementById('responsavel-group');

    // Função para calcular idade
    function calcularIdade(dataNascimento) {
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }
        return idade;
    }

    // Exibir campo de responsável para menores de idade
    nascimentoInput.addEventListener('change', function () {
        const dataNascimento = new Date(nascimentoInput.value);
        const idade = calcularIdade(dataNascimento);

        if (idade < 18) {
            responsavelGroup.style.display = 'block';
        } else {
            responsavelGroup.style.display = 'none';
        }
    });

    // Simula o cadastro de usuário e redireciona para a página principal
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'main.html'; 
    });
});
