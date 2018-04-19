
var i;
for (i = 1; i < 1000; i++){
    var lt = $('#veh-info'+i).data('lat');
    var lo = $('#veh-info'+i).data('long');
    var time = $('#veh-info'+i).data('time');
    var type = $('#veh-info'+i).data('type');

    if (lt === undefined) {
       // layerGroup.addTo(mymap)
        i = 1000;
    } else {
        if (type == 'ambulance') {
            var layer = L.marker([lt, lo], {icon: ambulanceIcon}, {riseOnHover: true}).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'truck') {
            var layer = L.marker([lt, lo], {icon: truckIcon}, {riseOnHover: true}).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'boat') {
            var layer = L.marker([lt, lo], {icon: boatIcon}, {riseOnHover: true}).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'firefighter') {
            var layer = L.marker([lt, lo], {icon: firefighterIcon}, {riseOnHover: true}).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'police') {
            var layer = L.marker([lt, lo], {icon: policeIcon}, {riseOnHover: true}).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'helo') {
            var layer = L.marker([lt, lo], {icon: heloIcon}, {riseOnHover: true}).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else {
            var layer = L.marker([lt, lo], {icon: carIcon}, {riseOnHover: true}).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        }
        layer.addTo(vMap);
    }
}
/*
var cliPopup = L.popup();
function onMapClick(e) {
    cliPopup
        .setLatLng(e.latlng)
        .setContent('You clicked at ' + e.latlng.lat.toPrecision(6) + ', ' + e.latlng.lng.toPrecision(6))
        .openOn(mymap);
}
mymap.on('click', onMapClick);
*/
