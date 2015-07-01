import Map from './map'

const position = {
  lat: 53.54,
  lng: 10
};

function mapInterface(position) {
  return new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 13
  });
}

function markerInterface(map, position) {
  new google.maps.Marker({
    map: map,
    position: position
  });
}

let map = new Map(position, mapInterface, markerInterface);

map.setMarkerAtCurrentPosition();
