document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário para o servidor
        
        // Simular o cadastro do usuário (pode adicionar validações extras aqui)
        alert('Cadastro realizado com sucesso!');
        
        // Redirecionar para a página principal
        window.location.href = 'main.html';
    });
});
