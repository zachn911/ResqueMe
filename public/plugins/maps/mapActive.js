var mymap = L.map('mapid').setView([33.21, -97.13],14);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.satellite-streets',
    accessToken: 'pk.eyJ1IjoicmVzcXVlbWUiLCJhIjoiY2pkZG91aDNuMDRsMDJ3bmpnOGJpNGNlNyJ9.hwp2QeD6easWjlAlaEIJ2w'
}).addTo(mymap);

var myIcon = L.Icon.extend({
    iconSize: [10, 10],
    popupAnchor:  [30, 0]
});

var zombieIcon = new myIcon({iconUrl: '/plugins/leaflet/images/zombie-icon.png'});
var tsunamiIcon = new myIcon({iconUrl: '/plugins/leaflet/images/tsunami-icon.png'});
var truckIcon = new myIcon({iconUrl: '/plugins/leaflet/images/truck-icon.png'});
var treedownIcon = new myIcon({iconUrl: '/plugins/leaflet/images/treedown-icon.png'});
var tornadoIcon = new myIcon({iconUrl: '/plugins/leaflet/images/tornado-icon.png'});
var skullIcon = new myIcon({iconUrl: '/plugins/leaflet/images/skull-icon.png'});
var sarIcon = new myIcon({iconUrl: '/plugins/leaflet/images/sar-icon.png'});
var policeIcon = new myIcon({iconUrl: '/plugins/leaflet/images/police-icon.png'});
var personIcon = new myIcon({iconUrl: '/plugins/leaflet/images/person-icon.png'});
var heloIcon = new myIcon({iconUrl: '/plugins/leaflet/images/helo-icon.png'});
var floodIcon = new myIcon({iconUrl: '/plugins/leaflet/images/flood-icon.png'});
var firefighterIcon = new myIcon({iconUrl: '/plugins/leaflet/images/firefighter-icon.png'});
var fireIcon = new myIcon({iconUrl: '/plugins/leaflet/images/fire-icon.png'});
var earthquakeIcon = new myIcon({iconUrl: '/plugins/leaflet/images/earthquake-icon.png'});
var carIcon = new myIcon({iconUrl: '/plugins/leaflet/images/car-icon.png'});
var boatIcon = new myIcon({iconUrl: '/plugins/leaflet/images/boat-icon.png'});
var avalancheIcon = new myIcon({iconUrl: '/plugins/leaflet/images/avalanche-icon.png'});
var ambulanceIcon = new myIcon({iconUrl: '/plugins/leaflet/images/ambulance-icon.png'});
var circleIcon = new myIcon({iconUrl: '/plugins/leaflet/images/fa-dot-circle.png'});

mymap.locate({
    watch: false,
    setView: false,
    enableHighAccuracy: true
})

function onLocationFound(e) {
     //  mymap.setZoom(16);
     //  L.circle(e.latlng, 30).addTo(mymap);
     //  L.circle(e.latlng, 1).addTo(mymap);
    mymap.panTo({e.latlng});
    L.marker(e.latlng, {icon: personIcon}).bindPopup("Current location.").addTo(mymap);
}
mymap.on('locationfound', onLocationFound);

var la = 32.19;
var lo = -93.81;
marker = L.marker([la, lo]).addTo(mymap);
marker.bindPopup('The hometown of Charla: ' + la + ', ' + lo);

L.marker([33.21, -97.13], {icon: skullIcon}, {riseOnHover: true}).bindPopup("I am a skull.").addTo(mymap);



/*
mymap.on('click', function(e) {
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    marker.bindPopup('This is at: ' + lat + ', ' + lng).openPopup();
} );
*/