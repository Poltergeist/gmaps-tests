// Should initialize the google map
// * should have a center position (getCenter)

import assert from 'assert';
import sinon from 'sinon';
import Map from '../src/map.js';
import MapInterfaceDouble from './mapInterface.js';
import Google from '../src/google.js';

assert.called = sinon.assert.called;
assert.calledWith = sinon.assert.calledWith;

describe('The map', function () {
  const mapInstance = {};

  let map,
    position = {lat: 0, lng: 0},
    mapInterface = () => {
      return mapInstance; // google.maps.Map()
    },
    markerInterface = () => {
      return true; // google.maps.Marker()
    };

    beforeEach(function() {
      MapInterfaceDouble.mapInterface = mapInterface;
      map = new Map(position, MapInterfaceDouble);
    });

  describe('should setup', function () {
    it('should initialize the google map object', function () {
      assert.equal(typeof map, 'object');
    });

    it('should have a position', function () {
      assert.equal(map.position, position);
    });
  });

  describe('should add marker', function () {
    it('at current position', function () {
      let markerInterface = sinon.stub();
      MapInterfaceDouble.markerInterface = markerInterface;

      map = new Map(position, MapInterfaceDouble);

      map.setMarkerAtCurrentPosition();
      assert.calledWith(markerInterface, mapInstance, position);
    });
  });

  describe('should add marker at', function () {
    it('address', function () {
      let geocodeInterface = sinon.stub(),
        address = 'hamburg';
      MapInterfaceDouble.geocodeInterface = geocodeInterface;

      map = new Map(position, MapInterfaceDouble);
      map.setMarkerAtAddress(address);

      assert.calledWith(geocodeInterface, mapInstance, address);
    });
  });

  mapsInterfaceCheck(Google);
  mapsInterfaceCheck(MapInterfaceDouble);
});

function mapsInterfaceCheck(iFace) {
  describe('mapInterface', function () {
    it('has static mapInterface', function () {
      assert.ok("mapInterface" in iFace);
    });
    it('has static markerInterface', function () {
      assert.ok("markerInterface" in iFace);
    });
    it('has static geocodeInterface', function () {
      assert.ok("geocodeInterface" in iFace);
    });
  });
}
