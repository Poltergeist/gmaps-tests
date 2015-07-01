import Map from './map'

const position = {
  lat: 53.54,
  lng: 10
};

function mapInterface(position) {
  new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 13
  });
}

new Map(mapInterface, position);
