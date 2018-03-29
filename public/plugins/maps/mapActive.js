
mymap.locate({
    watch: false,
    setView: false,
    enableHighAccuracy: true
})

//get current location
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

//test icons



var popup = L.popup()
    .setLatLng([33.212, -97.123])
    .setContent('<p>Bill Adair<br />Battalion 1 Engine 3<br />Loc: 33.212, -97.123<br />Heading: 284 Speed 55 mph<br />Last update: 28:21:55</p>');
L.marker([33.212, -97.123], {icon: firefighterIcon}, {riseOnHover: true}).bindPopup(popup).addTo(mymap);

L.marker([33.208, -97.12], {icon: ambulanceIcon}, {riseOnHover: true}).bindPopup("Ambulance # 26; Loc: 33.16, -97.2").addTo(mymap);
L.marker([33.21, -97.13], {icon: skullIcon}, {riseOnHover: true}).bindPopup("Toxic Spill").addTo(mymap);
/*
var la = 32.19;
var lo = -93.81;
marker = L.marker([la, lo]).addTo(mymap);
marker.bindPopup('The hometown of Charla: ' + la + ', ' + lo);
*/