const apiKey = 'pk.eyJ1Ijoia2FsZWJzdHlsZXMiLCJhIjoiY2twdjZpeDdnMGp4eDJ4cDlheHI0YW1pZCJ9.7Ti_sd6PQCS_MJGbtIP7Sw';

const myMap = L.map('map').setView([-4.448, -81.272], 15);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(myMap);

var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
        counter = 1;
        }
    }, 5000);
