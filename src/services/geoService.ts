import { Location } from '@app/types/types';
import { UClient } from './Client';
import { GeoParams, GeoServiceResponse, GetOrdersParams } from './types';

export interface GeoService {
  getAddressFromPoint: (params: GeoParams) => Promise<GeoServiceResponse>;
  getTimeDistanceToPoint: (params: GeoParams) => Promise<GeoServiceResponse>;
}

const geoService = (client: UClient): GeoService => {
  const getAddressFromPoint = async (
    params: GeoParams,
  ): Promise<GeoServiceResponse> => {
    return client
      .get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${params.point[0].coordinates[1]}&lon=${params.point[0].coordinates[0]}&apiKey=1bf4dc69fe6941f5a0939c604ca35fa1`,
      )
      .then(res => {
        const addressInfo = res.data.features[0].properties;
        console.log('Address info', addressInfo);

        const location: Location = {
          addressLine1: addressInfo.address_line1,
          addressLine2: addressInfo.address_line2,
          city: addressInfo.city,
          state: addressInfo.state,
          countryCode: addressInfo.countryCode,
          postalCode: addressInfo.postCode,
          formatted: addressInfo.formatted,
        };

        return { data: location, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };
  const getTimeDistanceToPoint = async (
    params: GeoParams,
  ): Promise<GeoServiceResponse> => {
    return client
      .get(
        `https://api.geoapify.com/v1/routing?waypoints=${params.point[0].coordinates[1]},${params.point[0].coordinates[0]}|${params.point[1].coordinates[1]},${params.point[1].coordinates[0]}&mode=${params!.mode}&apiKey=1bf4dc69fe6941f5a0939c604ca35fa1`,
      )
      .then(res => {
        const time = res.data.features[0].properties.time;
        const distance = res.data.features[0].properties.distance;
        console.log('Time', time, 'Distance', distance);

        return { data: { time, distance }, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  return { getAddressFromPoint, getTimeDistanceToPoint };
};

export default geoService;
