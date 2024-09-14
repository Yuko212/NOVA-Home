document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar HTML externo em um elemento
    function loadHTML(elementId, filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar ' + filePath);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => {
                console.error('Erro ao carregar o conteúdo: ', error);
            });
    }

    // Carregar header e footer dinamicamente
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');

    // Função para abrir o pop-up
    function openPopup(comodo) {
        const popup = document.getElementById('popup');
        const popupImg = document.getElementById('popup-img');
        const popupName = document.getElementById('popup-name');
        const popupDimensoes = document.getElementById('popup-dimensoes');
        const popupSensor = document.getElementById('popup-sensor');
        const editBtn = document.getElementById('edit-btn');

        const comodos = {
            quarto: {
                img: 'profile-picture.jpg', // Substitua pelo caminho correto da foto de perfil
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
                editable: false
            },
            sala: {
                img: 'sala.jpg',
                name: 'Sala',
                dimensoes: '5x7x3',
                sensor: 'Temperatura',
                editable: false
            },
            hall: {
                img: 'hall.jpg',
                name: 'Hall de Entrada',
                dimensoes: '3x3x3',
                sensor: 'Nenhum',
                editable: false
            },
            varanda: {
                img: 'varanda.jpg',
                name: 'Varanda',
                dimensoes: '4x5x2.5',
                sensor: 'Umidade',
                editable: false
            },
            cozinha: {
                img: 'cozinha.jpg',
                name: 'Cozinha',
                dimensoes: '4x6x3',
                sensor: 'Gás',
                editable: false
            }
        };

        // Atualiza o conteúdo do pop-up
        popupImg.src = comodos[comodo].img;
        popupName.value = comodos[comodo].name;
        popupDimensoes.textContent = 'Dimensões: ' + comodos[comodo].dimensoes;
        popupSensor.textContent = 'Sensor: ' + comodos[comodo].sensor;
        popupName.style.display = comodos[comodo].editable ? 'block' : 'none';

        // Mostrar pop-up
        popup.classList.add('active');

        // Evento de clique no botão de editar
        editBtn.onclick = function() {
            if (comodos[comodo].editable) {
                alert('Função de editar ainda não implementada');
            }
        };
    }

    // Função para fechar o pop-up
    document.getElementById('popup-close-btn').addEventListener('click', function() {
        document.getElementById('popup').classList.remove('active');
    });

    // Adicionar eventos de clique para os cômodos pré-cadastrados
    document.querySelectorAll('.comodo-item').forEach(item => {
        item.addEventListener('click', function() {
            openPopup(this.getAttribute('data-comodo'));
        });
    });
});
