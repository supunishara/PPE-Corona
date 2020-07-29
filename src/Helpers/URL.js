/**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: SignUp Reducer
 * Date: 2020/04/18
 */

export const API = {
  baseURL: 'http://54.169.148.101',
};

export const APIEndPoints = {
  signup: '/api/users',
  login: '/api/login',
};

export const GOOGLE_API_KEY = 'AIzaSyDHjCdP9LpW6ByxTaSeceMooUnldvoIDCw';

export const GOOGLE_API = {
  PLACES_AUTOCOMPLETE: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_API_KEY}&types=address&components=country:my`,
  PLACE_DETAILS: `https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_API_KEY}&fields=address_component,geometry`,
  ADDRESS_DETAILS: `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}`,
};
