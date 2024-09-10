document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do envio

        const senhaInput = document.getElementById('senha');
        const senha = senhaInput.value.trim();
        const senhaArmazenada = localStorage.getItem('senha');

        if (senha === senhaArmazenada) {
            // Senha correta, redirecionar para main.html
            window.location.href = 'main.html';
        } else {
            // Senha incorreta
            alert('Senha incorreta. Tente novamente.');
        }
    });
});
