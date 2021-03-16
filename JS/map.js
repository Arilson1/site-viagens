const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map - https://leafletjs.com -> site para adicionar o mapa
const map = L.map('mapid', options).setView([-22.4093503, -42.9708372], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// creeate and add marker 
L
.marker([-22.4093503, -42.9708372], { icon })
.addTo(map)
.bindPopup(popup)