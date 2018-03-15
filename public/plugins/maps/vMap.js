
var mymap = L.map('mapid').setView([31.2, -91.1],14);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.satellite-streets',
    accessToken: 'pk.eyJ1IjoicmVzcXVlbWUiLCJhIjoiY2pkZG91aDNuMDRsMDJ3bmpnOGJpNGNlNyJ9.hwp2QeD6easWjlAlaEIJ2w'
}).addTo(mymap);

mymap.locate({
    watch: true,
    setView: true,
    enableHighAccuracy: true
})

function onLocationFound(e) {
    var radius = e.accuracy/2;
    mymap.setZoom(16);
    L.circle(e.latlng, 4).addTo(mymap);

    L.circle(e.latlng, 1).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);