export default class Google {

  static mapInterface(position) {
    return new google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 13
    });
  }

  static markerInterface(map, position) {
    new google.maps.Marker({
      map: map,
      position: position
    });
  }

  static geocodeInterface(map, address) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      address: address
    }, ([{
      geometry: {
        location: result
      }
    }]) => {
      new google.maps.Marker({
        map: map,
        position: result
      });
    });
  }
}
