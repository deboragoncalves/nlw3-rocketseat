/* Map: função que recebe o argumento id. 
Set view: array com latitude e longitude, zoom. */

const map = L.map('mapid').setView([-26.3051,-48.8461], 16);

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

/* Popup. 
Close button: visível ou não.
Set content: conteúdo (texto e imagem)
*/

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent("Lar das Meninas <a href='orphanage.html?id=1' class='choose-orphanage'><img src='./public/images/arrow-white.svg'></a> ")

/* Marker: marcação na posição específica. Ligar e abrir popup */

L.marker([-26.3051,-48.8461], { icon }).addTo(map)
    .bindPopup(popup);
