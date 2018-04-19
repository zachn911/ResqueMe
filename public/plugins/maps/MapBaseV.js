
L.Map.include({
    'clearLayers':function() {
        this.eachLayer(function (layer) {
            this.removeLayer(layer);
        }, this);
    }
});

var vMap = L.map('mapid').setView([33.21, -97.13],13);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.satellite-streets',
    accessToken: 'pk.eyJ1IjoicmVzcXVlbWUiLCJhIjoiY2pkZG91aDNuMDRsMDJ3bmpnOGJpNGNlNyJ9.hwp2QeD6easWjlAlaEIJ2w'
}).addTo(vMap);

vMap.locate({
    watch: false,
    setView: false,
    enableHighAccuracy: true
});

function onLocationFound(e) {
    vMap.panTo(e.latlng);
    L.marker(e.latlng, {icon: circleIcon}).addTo(vMap).bindPopup('Current location: ' + e.latlng.lat.toPrecision(6) + ', ' + e.latlng.lng.toPrecision(6));
}
vMap.on('locationfound', onLocationFound);

var myIcon = L.Icon.extend({
    popupAnchor:  [15, 0]
});

var zombieIcon = new myIcon({iconUrl: '/plugins/leaflet/images/zombie-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var tsunamiIcon = new myIcon({iconUrl: '/plugins/leaflet/images/tsunami-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var truckIcon = new myIcon({iconUrl: '/plugins/leaflet/images/truck-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var treedownIcon = new myIcon({iconUrl: '/plugins/leaflet/images/treedown-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var tornadoIcon = new myIcon({iconUrl: '/plugins/leaflet/images/tornado-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var skullIcon = new myIcon({iconUrl: '/plugins/leaflet/images/skull-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var sarIcon = new myIcon({iconUrl: '/plugins/leaflet/images/sar-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var policeIcon = new myIcon({iconUrl: '/plugins/leaflet/images/police-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var personIcon = new myIcon({iconUrl: '/plugins/leaflet/images/person-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var heloIcon = new myIcon({iconUrl: '/plugins/leaflet/images/helo-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var floodIcon = new myIcon({iconUrl: '/plugins/leaflet/images/flood-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var firefighterIcon = new myIcon({iconUrl: '/plugins/leaflet/images/firefighter-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var fireIcon = new myIcon({iconUrl: '/plugins/leaflet/images/fire-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var earthquakeIcon = new myIcon({iconUrl: '/plugins/leaflet/images/earthquake-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var carIcon = new myIcon({iconUrl: '/plugins/leaflet/images/car-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var boatIcon = new myIcon({iconUrl: '/plugins/leaflet/images/boat-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var avalancheIcon = new myIcon({iconUrl: '/plugins/leaflet/images/avalanche-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var ambulanceIcon = new myIcon({iconUrl: '/plugins/leaflet/images/ambulance-icon.png', iconSize: [36, 40], iconAnchor: [18,40]});
var circleIcon = new myIcon({iconUrl: '/plugins/leaflet/images/fa-dot-circle.png', iconSize: [32, 32], iconAnchor: [16,16]});

