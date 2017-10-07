function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 39.2556, lng: -76.7110}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
	attachSecretMessage(marker, secretMessages[i]);
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var secretMessages = ['event at umbc', 'e at lib', 'the', 'secret', 'message', 'umbc baseball field', 'umbc registrars office', 'umbc department of physics'];
var locations = [
  {lat: 39.2556, lng: -76.7110}, //umbc
  {lat: 39.2563, lng: -76.7116}, //umbc library
  {lat: 39.2538, lng: -76.7143}, //umbc engineering building
  {lat: 39.2505, lng: -76.7075}, //umbc stadium
  {lat: 39.2548, lng: -76.7108}, //umbc university commons
  {lat: 39.2496, lng: -76.7086}, //umbc baseball field
  {lat: 39.2536, lng: -76.7132}, //umbc registrars office
  {lat: 39.2545, lng: -76.7097}, //umbc department of physics
]
function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}