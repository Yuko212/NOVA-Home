document.addEventListener('DOMContentLoaded', function() {
    // Simular validação e cadastro
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'main.html';
    });
});
