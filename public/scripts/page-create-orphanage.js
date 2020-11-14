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

    // Limpar mapa (sem ícones)
    // Se marker tivervalor, remover

    if (marker) {
        map.removeLayer(marker);
    }

    // Quando clicar, adicionar o ícone.

    marker = L.marker([lat, lng], { icon }).addTo(map)

})

