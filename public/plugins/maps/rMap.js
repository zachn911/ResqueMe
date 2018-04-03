
   // var myEle =  document.getElementById("res-info1");
   var i;
    var c = 1;
   for (i = 0; i < 10000; i++){
        var lt = $('#res-info'+c).data('lat');
        var lo = $('#res-info'+c).data('long');
        L.marker([lt, lo]).addTo(mymap).bindPopup("popup");
        c++;}
//alert("Testing!");
//alert('the index is: ' + rando );

