
var map;
var allMarkers = [];

function initMap() {
	var query = firebase.database().ref("users").orderByKey();
	var geocoder = new google.maps.Geocoder();
	query.once("value")
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
<<<<<<< HEAD
      var data = '<h4>' + childData.Event + ' with ' + childData.Company +'</h4>' +
          '<p>' + childData.Time + ' on ' + childData.Date + ' at ' + childData.Location + '</p><p><i>' + childData.Tags + '</i></p>';
      allMarkers.push(data);
      console.log(allMarkers.length + " psh");
      
=======

>>>>>>> 7a237dafc780a73e18630346c016b5a9e1fccf9b
	  //get lat and long from address
	  geocoder.geocode({'address': childData.Location}, function(results, status) {
          if (status === 'OK') {
            var latlong = results[0].geometry.location;
            var marker = new google.maps.Marker({
              map: map,
              position: latlong
            });
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {

					infowindowContent = '<h4>' + childData.Event + ' with ' + childData.Company +'</h4>' +
					'<p>' + childData.Time + ' at ' + childData.Location + '</p><p><i>' + childData.Tags + '</i></p>';
					infowindow.setContent(infowindowContent);
					infowindow.open(map, this);
					}
					})(marker, i))
					} else {
						alert('Geocode was not successful for the following reason: ' + status);
						}
						});
						});
						});

						map = new google.maps.Map(document.getElementById('map'), {
							zoom: 15,
							center: new google.maps.LatLng(39.2556, -76.7110),
							});
							
							if (navigator.geolocation) {
								navigator.geolocation.getCurrentPosition(function(position) {
									var pos = {
										lat: position.coords.latitude,
										lng: position.coords.longitude
										};
										map.setCenter(pos);
										});
							}

  var infowindow = new google.maps.InfoWindow();
  var markers = new Array(), i;

updateMap();
}
