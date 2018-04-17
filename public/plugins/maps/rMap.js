
var mk = [];
var i;
for (i = 1; i < 1000; i++) {
    var lt = $('#res-info' + i).data('lat');
    var lo = $('#res-info' + i).data('long');
    var name = $('#res-info' + i).data('name');
    var time = $('#res-info' + i).data('time');
    if (lt === undefined) {
        i = 1000;
    } else {
        L.marker([lt, lo], {icon: firefighterIcon}, {riseOnHover: true}).addTo(mymap).bindPopup(name + '<br>Organization<br>Loc: ' + lt + ', ' + lo + '<br>Last Update: ' + time);
    }
}
