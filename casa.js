document.addEventListener('DOMContentLoaded', function() {
    const comodos = {
        quarto: {
            img: 'default-profile.jpg',
            name: 'Quarto',
            dimensoes: '4x5x2.5',
            sensor: 'Nenhum',
            editable: true
        },
        banheiro: {
            img: 'banheiro.jpg',
            name: 'Banheiro',
            dimensoes: '2x3x2.5',
            sensor: 'Movimento',
            editable: true
        },
        sala: {
            img: 'sala.jpg',
            name: 'Sala',
            dimensoes: '5x7x3',
            sensor: 'Temperatura',
            editable: true
        },
        hall: {
            img: 'hall.jpg',
            name: 'Hall de Entrada',
            dimensoes: '3x3x3',
            sensor: 'Nenhum',
            editable: true
        },
        varanda: {
            img: 'varanda.jpg',
            name: 'Varanda',
            dimensoes: '4x5x2.5',
            sensor: 'Umidade',
            editable: true
        },
        cozinha: {
            img: 'cozinha.jpg',
            name: 'Cozinha',
            dimensoes: '4x6x3',
            sensor: 'Gás',
            editable: true
        }
    };

    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupName = document.getElementById('popup-name');
    const popupDimensoes = document.getElementById('popup-dimensoes');
    const popupSensor = document.getElementById('popup-sensor');
    const editBtn = document.getElementById('edit-btn');

    function openPopup(comodo) {
        const data = comodos[comodo];

        popupImg.src = data.img;
        popupName.value = data.name;
        popupDimensoes.textContent = 'Dimensões: ' + data.dimensoes;
        popupSensor.textContent = 'Sensor: ' + data.sensor;

        popup.classList.add('active');

        editBtn.onclick = function() {
            if (data.editable) {
                data.name = popupName.value;
                alert('Cômodo salvo com sucesso!');
                popup.classList.remove('active');
            }
        };
    }

    document.getElementById('popup-close-btn').addEventListener('click', function() {
        popup.classList.remove('active');
    });

    document.querySelectorAll('.comodo-item').forEach(item => {
        item.addEventListener('click', function() {
            openPopup(this.getAttribute('data-comodo'));
        });
    });

    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('side-nav').style.width = '0';
    });
});

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