$(document).ready(function () {
    // will call refreshPartial every 3 seconds
    setInterval(refreshPartial, 1000)

});

function refreshPartial() {
    $.ajax({
        type: "GET",
        url: "live_update"
    });
}