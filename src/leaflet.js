export default class Leaflet {

  static mapInterface(position) {
    let map = L.map('map').setView([position.lat, position.lng], 13);
    L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 16,
      ext: 'png'
    }).addTo(map);
    L.Icon.Default.imagePath = '/node_modules/leaflet/dist/images/';
    return map;
  }

  static markerInterface(map, position) {
    L.marker([position.lat, position.lng]).addTo(map);
  }

  static geocodeInterface(map, address) {
    let xmlhttp = new XMLHttpRequest(),
      url = `http://nominatim.openstreetmap.org/search?format=json&q=${address}`;

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let position = JSON.parse(xmlhttp.responseText)[0];
        L.marker([position.lat, position.lon]).addTo(map);
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
}
