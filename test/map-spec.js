// Should initialize the google map
// * should have a center position (getCenter)

import assert from 'assert';
import sinon from 'sinon';
import Map from '../src/map.js';

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
      map = new Map(position, mapInterface, markerInterface);
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
    it('at position', function () {
      let markerInterface = sinon.stub();

      map = new Map(position, mapInterface, markerInterface);

      map.setMarkerAtCurrentPosition();
      assert.calledWith(markerInterface, mapInstance, position);
    });
  });
});
