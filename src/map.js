export default class Map {
  constructor(mapInterface, position) {
    this.position = position;
    this.mapInstance = mapInterface(this.position);
  }

  setMarkerAtCurrentPosition() {
    this.markerInterface(this.mapInstance);
  }
}
