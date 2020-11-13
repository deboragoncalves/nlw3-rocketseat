const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

/* Map: função que recebe o argumento id. 
Set view: array com latitude e longitude, zoom.
Options: Desabilita mexer no mapa. Segundo argmento na criação do mapa. */

const map = L.map('mapid', options).setView([-26.3051,-48.8461], 16);

/* Tile Layer: primeira camada que recebe o mapa. */

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Icone: função que possui um objeto com as chaves obrigatórias. 
// Popup anchor: popup ao lado do ícone.

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

/* Marker: marcação na posição específica. Ligar e abrir popup */

L.marker([-26.3051,-48.8461], { icon }).addTo(map);

function selectImage(event) {

    // Selecionar botáo clicado.
    
    const button = event.currentTarget

    // Remover classes active. Array buttons

    const buttons = document.querySelectorAll(".images button")

    // Para cada botão, remover.

    buttons.forEach(button => {
        button.classList.remove("active")
    })

    // Selecionar imagem clicada. Image: retorna uma lista de elementos filhos.

    const image = button.children[0]

    // Selecionar o container maior.

    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar container de imagem. Atributo src recebe o src da imagem do botáo clicado.

    imageContainer.src = image.src

    // Adicionar classe .active para o botão que foi clicado.

    button.classList.add('active')
}

