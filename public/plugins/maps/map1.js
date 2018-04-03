
mymap.locate({
    watch: false,
    setView: false,
    enableHighAccuracy: true
})

function onLocationFound(e) {
    mymap.panTo(e.latlng);
    L.marker(e.latlng, {icon: circleIcon}).bindPopup('Current location: ' + e.latlng.lat.toPrecision(6) + ', ' + e.latlng.lng.toPrecision(6)).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);

//popup on map click
var cliPopup = L.popup();
function onMapClick(e) {
    cliPopup
        .setLatLng(e.latlng)
        .setContent('You clicked at ' + e.latlng.lat.toPrecision(6) + ', ' + e.latlng.lng.toPrecision(6))
        .openOn(mymap);
}
mymap.on('click', onMapClick);