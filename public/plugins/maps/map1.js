if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    });

}else {
    alert("Geolocation API is not supported in your browser. :(");
}

var mymap = L.map('mapid').setView([31.2, -91.1],14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmVzcXVlbWUiLCJhIjoiY2pkZG91aDNuMDRsMDJ3bmpnOGJpNGNlNyJ9.hwp2QeD6easWjlAlaEIJ2w'
}).addTo(mymap);

mymap.locate({
    watch: false,
    setView: true,
    maxZoom: 16,
    enableHighAccuracy: true
})

function onLocationFound(e) {
    var radius = e.accuracy/2;

    L.circle(e.latlng, 4).addTo(mymap);

    L.circle(e.latlng, 1).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

var la = 33.215;
var lo = -97.1331;
L.marker([la, lo]).addTo(mymap);