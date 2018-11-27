var mymap = L.map('mapid').setView([53.320, -2.602], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/lorenzo-phrasavath/cjp052n120y6t2rp6cbltd9ay/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG9yZW56by1waHJhc2F2YXRoIiwiYSI6ImNqcDA1MWcxczAxc3Qzdm82dWtkNGltdngifQ.hM6x9_2hsfZgYuIQ7EwBHg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
  }).addTo(mymap);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h2>' + places[i].team + '</h2>' + places[i].description)
  .addTo(mymap);
};
