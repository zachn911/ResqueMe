if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position){
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    });

}else {
    alert("Geolocation API is not supported in your browser. :( ");
}

var mymap = L.map('mapid').setView([31.2, -91.1],14);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 16,
  //  id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoicmVzcXVlbWUiLCJhIjoiY2pkZG91aDNuMDRsMDJ3bmpnOGJpNGNlNyJ9.hwp2QeD6easWjlAlaEIJ2w'
}).addTo(mymap);

//https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}
// mapbox://styles/mapbox/satellite-streets-v9

mymap.locate({
    watch: false,
    setView: true,
    maxZoom: 17,
    enableHighAccuracy: true
})

function onLocationFound(e) {
    var radius = e.accuracy/2;
 /*
    var markerLocation = new L.LatLng(e.latlng)
        //Extend the Default marker class
        var IconCircle = L.Icon.Default.extend({
            options: {
                iconUrl: 'fa-dot-circle.png'
            }
        });
    var iconCircle = new IconCircle();

    L.marker(markerLocation, {icon: fa-dot-circle.png}).addTo(map);
*/
 //   L.marker(e.latlng).addTo(mymap)

    L.circle(e.latlng, radius).addTo(mymap);

    L.circle(e.latlng, 1).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);


