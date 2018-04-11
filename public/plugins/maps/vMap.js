
mymap.locate({
    watch: false,
    setView: false,
    enableHighAccuracy: true
})

function onLocationFound(e) {
    mymap.panTo(e.latlng);
    L.marker(e.latlng, {icon: circleIcon}).bindPopup("Current location.").addTo(mymap);
}
mymap.on('locationfound', onLocationFound);

var i;
for (i = 1; i < 10000; i++){
    var lt = $('#veh-info'+i).data('lat');
    var lo = $('#veh-info'+i).data('long');
    var time = $('#veh-info'+i).data('time');

    L.marker([lt, lo], {icon: ambulanceIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
}