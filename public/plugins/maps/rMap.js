
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

    var rando= $('#res-info').data('indx');
    var lt = $('#res-info').data('lat');
    var lo = $('#res-info').data('long');
    L.marker([lt, lo]).addTo(mymap).bindPopup("Ambulance # 26; Loc: 33.16, -97.2");



//var lg = '<%= respondern.long %>';
//alert("Testing!");
//alert('the index is: ' + rando );

