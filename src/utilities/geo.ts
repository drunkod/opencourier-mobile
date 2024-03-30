import { Point } from 'geojson';
import Geolocation from 'react-native-geolocation-service';
export function track(onUpdate: (point: Point) => void) {
  Geolocation.getCurrentPosition(
    position => {
      const currentLocation: Point = {
        type: 'Point',
        coordinates: [position.coords.latitude, position.coords.longitude],
      };
      onUpdate(currentLocation);
    },
    error => {
      // console.warn('Location error: ', error);
    },
      // See https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition for
    // details on options
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  );
  const newWatchId = Geolocation.watchPosition(
    position => {
      const currentLocation: Point = {
        type: 'Point',
        coordinates: [position.coords.latitude, position.coords.longitude],
      };
      onUpdate(currentLocation);
    },
    error => {
      // console.warn('Location error: ', error);
    },
  );
  return newWatchId;
}


