while(true) {
    var myEle =  document.getElementById("res-info");

    var lt = $('#res-info').data('lat');
    var lo = $('#res-info').data('long');
    L.marker([lt, lo]).addTo(mymap).bindPopup("popup");
}

//alert("Testing!");
//alert('the index is: ' + rando );

