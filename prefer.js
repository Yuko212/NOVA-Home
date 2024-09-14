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

// Funções para abrir e fechar a barra lateral
function closeNav() {
    document.querySelector('.side-nav').style.transform = 'translateX(-100%)';
}
function openNav() {
    document.querySelector('.side-nav').style.transform = 'translateX(0)';
}
