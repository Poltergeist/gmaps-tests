export default class Map {
  constructor(position, mapInterface, markerInterface) {
    this.position = position;
    this.mapInstance = mapInterface(this.position);
    this.markerInterface = markerInterface;
  }

  setMarkerAtCurrentPosition() {
    this.markerInterface(this.mapInstance, this.position);
  }
}
