// Função para carregar header e footer
function loadHTML(elementId, url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById(elementId).innerHTML = data;
    });
}

// Funções para atualizar valores das preferências
function updateLightLevel() {
    let lightValue = document.getElementById("light-level").value;
    document.getElementById("light-value").innerText = lightValue + "%";
}

function updateTemperature() {
    let tempValue = document.getElementById("temperature").value;
    document.getElementById("temperature-value").innerText = tempValue + "°C";
}

function updateVolume() {
    let volumeValue = document.getElementById("volume").value;
    document.getElementById("volume-value").innerText = volumeValue + "%";
}

function updateCurtains() {
    let curtainsValue = document.getElementById("curtains").value;
    document.getElementById("curtains-value").innerText = curtainsValue + "%";
}

function updateHumidification() {
    let humidificationValue = document.getElementById("humidification").value;
    document.getElementById("humidification-value").innerText = humidificationValue + "%";
}

document.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.getElementById('side-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');

    menuToggle.addEventListener('click', () => {
        sideNav.style.width = '240px'; /* Ajuste para abrir a barra lateral */
    });

    closeBtn.addEventListener('click', () => {
        sideNav.style.width = '0'; /* Ajuste para fechar a barra lateral */
    });

    // Atualizar o valor exibido dos controles
    const updateRangeValue = (id, value) => {
        document.getElementById(id + '-value').textContent = value + '%';
    };

    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.addEventListener('input', (e) => {
            updateRangeValue(e.target.id, e.target.value);
        });
    });
});


