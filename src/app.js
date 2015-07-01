import Map from './map';
import Google from './google';

const position = {
  lat: 53.54,
  lng: 10
};

let map = new Map(position, Google);

map.setMarkerAtCurrentPosition();
map.setMarkerAtAddress('berlin');
