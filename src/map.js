export default class Map {
  constructor(position, {mapInterface, markerInterface, geocodeInterface}) {
    this.position = position;
    this.mapInstance = mapInterface(this.position);
    this.markerInterface = markerInterface;
    this.geocodeInterface = geocodeInterface;
  }

  setMarkerAtCurrentPosition() {
    this.markerInterface(this.mapInstance, this.position);
  }

  setMarkerAtAddress(address) {
    this.geocodeInterface(this.mapInstance, address);
  }
}
