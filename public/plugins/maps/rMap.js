
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

   var i;
   for (i = 1; i < 10000; i++){
        var lt = $('#res-info'+i).data('lat');
        var lo = $('#res-info'+i).data('long');

        var time = $('#res-info'+i).data('time');

        L.marker([lt, lo], {icon: firefighterIcon}, {riseOnHover: true}).addTo(mymap).bindPopup('Name<br>Organization<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
        }


