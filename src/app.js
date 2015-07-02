import Map from './map';
//import Google from './google';
import leaflet from 'leaflet'
import l from './leaflet'



const position = {
  lat: 53.54,
  lng: 10
};

let map = new Map(position, l);

map.setMarkerAtCurrentPosition();
map.setMarkerAtAddress('berlin');
