var mymap = L.map('mapid').setView([27.826, -82.710], 10.5);

L.tileLayer('https://api.mapbox.com/styles/v1/lorenzo-phrasavath/cjp052n120y6t2rp6cbltd9ay/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG9yZW56by1waHJhc2F2YXRoIiwiYSI6ImNqcDA1MWcxczAxc3Qzdm82dWtkNGltdngifQ.hM6x9_2hsfZgYuIQ7EwBHg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
  }).addTo(mymap);

var alesia = L.marker([27.770667, -82.738212]).addTo(mymap);
var bodega = L.marker([27.770905, -82.650621]).addTo(mymap);
var casitas = L.marker([27.771174, -82.669702]).addTo(mymap);
var munchs =  L.marker([27.732968, -82.640616]).addTo(mymap);

alesia.bindPopup("<h3>Alesia Restaurant</h3><p>7204 Central Avenue North,<br>St. Petersburg, FL 33707</p>");
bodega.bindPopup("<h3>Bodega on Central</h3><p>1120 Central Ave,<br>St. Petersburg, FL 33705</p>");
casitas.bindPopup("<h3>Casita Taqueria</h3><p>2663 Central Ave,<br>St. Petersburg, FL 33713</p>");
munchs.bindPopup("<h3>Munch's Restaurant</h3><p>3920 6th St S,<br>St. Petersburg, FL 33705</p>");
