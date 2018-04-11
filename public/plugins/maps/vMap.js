/*
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
*/
var i;
for (i = 1; i < 10000; i++){
    var lt = $('#veh-info'+i).data('lat');
    var lo = $('#veh-info'+i).data('long');
    var time = $('#veh-info'+i).data('time');
    var type = $('#veh-info'+i).data('type');

    if (type == 'ambulance') {
        L.marker([lt, lo], {icon: ambulanceIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
    } else if (type == 'truck') {
        L.marker([lt, lo], {icon: truckIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
    } else if (type == 'boat') {
        L.marker([lt, lo], {icon: boatIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
    } else {
        L.marker([lt, lo], {icon: carIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
    }

}