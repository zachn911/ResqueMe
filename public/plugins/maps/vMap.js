
var i;
for (i = 1; i < 1000; i++){
    var lt = $('#veh-info'+i).data('lat');
    var lo = $('#veh-info'+i).data('long');
    var time = $('#veh-info'+i).data('time');
    var type = $('#veh-info'+i).data('type');

    if (lt === undefined) {
        i = 1000;
    } else {
        if (type == 'ambulance') {
            L.marker([lt, lo], {icon: ambulanceIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'truck') {
            L.marker([lt, lo], {icon: truckIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'boat') {
            L.marker([lt, lo], {icon: boatIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'firefighter') {
            L.marker([lt, lo], {icon: firefighterIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'police') {
            L.marker([lt, lo], {icon: policeIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else if (type == 'helo') {
            L.marker([lt, lo], {icon: heloIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        } else {
            L.marker([lt, lo], {icon: carIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Make<br>Model<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        }
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
