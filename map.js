
var map;

function initMap() {

  var events = [{
      lat: 39.2556,
      lng: -76.7110,
      eventName: "umbc"
    },
    {
      lat: 39.2563,
      lng: -76.7116,
      eventName: "umbc library"
    },
    {
      lat: 39.2538,
      lng: -76.7143,
      eventName: "umbc engineering building"
    },
    {
      lat: 39.2505,
      lng: -76.7075,
      eventName: "umbc stadium"
    },
    {
      lat: 39.2548,
      lng: -76.7108,
      eventName: "umbc university commons"
    },
    {
      lat: 39.2496,
      lng: -76.7086,
      eventName: "umbc baseball field"
    },
    {
      lat: 39.2536,
      lng: -76.7132,
      eventName: "umbc registrars office"
    },
    {
      lat: 39.2545,
      lng: -76.7097,
      eventName: "umbc department of physics"
    }
  ]

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(39.2556, -76.7110),
  });

  var infowindow = new google.maps.InfoWindow();

  var marker = new Array(),
    i;

  for (i = 0; i < events.length; i++) {
    marker[i] = new google.maps.Marker({
      position: new google.maps.LatLng(events[i]["lat"], events[i]["lng"]),
      map: map
    });

    google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(events[i]["eventName"]);
        infowindow.open(map, this);
      }
    })(marker[i], i));
  }
  var markerCluster = new MarkerClusterer(map, marker, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });

updateMap();
}
