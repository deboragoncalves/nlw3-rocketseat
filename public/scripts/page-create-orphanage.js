/* Map: função que recebe o argumento id. 
Set view: array com latitude e longitude, zoom. */

const map = L.map('mapid').setView([-26.3051,-48.8461], 16);

/* Tile Layer: primeira camada que recebe o mapa. */

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Icone: função que possui um objeto com as chaves obrigatórias. 

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

// Criar e adicionar marker

// On: função do map que vai ouvir o click e executar uma função

// Event: objeto que traz latitude/longitude no momento do click

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // Adicionar valores aos inputs 

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // Limpar mapa (sem ícones)
    // Se marker tiver valor, remover

    if (marker) {
        map.removeLayer(marker);
    }

    // Quando clicar, adicionar o ícone.

    marker = L.marker([lat, lng], { icon }).addTo(map)

})

// Adicionar fotos

function addPhotoField() {

    // Duplicar div com class new-upload, com a última imagem selecionada

    const container = document.querySelector('#images')

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Método cloneNode: true (copia o que está dentro do .new-upload) ou false (duplica apenas a div .new-upload)

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Se input estiver vazio, não prosseguir (limpar/adicionar novo). Else (opcional)

    // Children: retorna array de elementos filhos. Input: posição 0 

    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // Limpar input e adicionar (append) ao container de imagens

    input.value = ""

    container.appendChild(newFieldContainer)

}

function deleteField(event) {

    // Event: objeto. Current target: quem dispara o evento de click

    const span = event.currentTarget

    // Container com class .new-upload

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Permitir a remoção somente com mais de um elemento

    if (fieldsContainer.length < 2) {

        // Limpar o input
        // Parent node: pegar o pai (new-upload)

        span.parentNode.children[0].value = "";
        return;
    }

    // Deletar o input 
    
    span.parentNode.remove()
}

// Seleção dos botões sim e não

function toggleSelect(event) {

    // Retirar a classe active dos botões usando foreach

    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'))

    // Colocar a classe active no botão clicado

    const button = event.currentTarget
    button.classList.add('active')

    // Pegar input clicado

    const input = document.querySelector('[name="opening_on_weekends"]')

    // Pegar valor do data value
    
    input.value = button.dataset.value
}

