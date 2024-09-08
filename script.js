document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const nascimentoInput = document.getElementById('nascimento');
    const responsavelGroup = document.getElementById('responsavel-group');

    nascimentoInput.addEventListener('change', function () {
        const dataNascimento = new Date(nascimentoInput.value);
        const idade = calcularIdade(dataNascimento);

        if (idade < 18) {
            responsavelGroup.style.display = 'block';
        } else {
            responsavelGroup.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio real do formulário

        // Simula o cadastro de usuário
        alert('Cadastro realizado com sucesso!');

        // Redireciona para a página principal
        window.location.href = 'main.html';
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
});
