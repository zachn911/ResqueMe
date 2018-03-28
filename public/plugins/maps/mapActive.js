
mymap.locate({
    watch: false,
    setView: false,
    enableHighAccuracy: true
})

//get current location
function onLocationFound(e) {
    mymap.panTo(e.latlng);
    L.marker(e.latlng, {icon: circleIcon}).bindPopup('Current location: ' + e.latlng).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);

//popup on map click
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

//test icons
L.marker([33.208, -97.12], {icon: ambulanceIcon}, {riseOnHover: true}).bindPopup("Ambulance # 26; Loc: 33.16, -97.2").addTo(mymap);
L.marker([33.21, -97.13], {icon: skullIcon}, {riseOnHover: true}).bindPopup("Toxic Spill").addTo(mymap);

var la = 32.19;
var lo = -93.81;
marker = L.marker([la, lo]).addTo(mymap);
marker.bindPopup('The hometown of Charla: ' + la + ', ' + lo);
