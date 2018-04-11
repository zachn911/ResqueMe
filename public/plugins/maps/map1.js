
//popup on map click
var cliPopup = L.popup();
function onMapClick(e) {
    cliPopup
        .setLatLng(e.latlng)
        .setContent('You clicked at ' + e.latlng.lat.toPrecision(6) + ', ' + e.latlng.lng.toPrecision(6))
        .openOn(mymap);
}
mymap.on('click', onMapClick);