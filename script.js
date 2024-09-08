document.getElementById('light-control').addEventListener('input', function () {
    console.log("Luz ajustada para: " + this.value);
});

document.getElementById('temp-control').addEventListener('input', function () {
    console.log("Temperatura ajustada para: " + this.value + "°C");
});

// Simular mudanças no estado dos sensores
setInterval(function () {
    let lightStatus = document.getElementById('sensor-light-1');
    let tempStatus = document.getElementById('sensor-temp-1');

    // Simulação aleatória para demonstrar a interação
    lightStatus.textContent = (Math.random() > 0.5) ? "Ativo" : "Inativo";
    tempStatus.textContent = (Math.random() * 10 + 20).toFixed(1) + "°C";
}, 3000);
