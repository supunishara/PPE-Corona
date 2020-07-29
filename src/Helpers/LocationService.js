import { GOOGLE_API } from "../Helpers/URL";
import { SearchLocationDef } from "./Def/LocationDef.d";
// import { GoogleAutoCompleteResponseDef } from "../Screens/Location/TypeDef/GooglePlaces.d";

export class LocationService {
  static fetchLocations({
    locationText,
  }): Promise<SearchLocationDef> {
    let locParams = "";
    const urlSearch = `${GOOGLE_API.PLACES_AUTOCOMPLETE}&input=${locationText ||
      ""}`;

    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(urlSearch, {
        method: "GET",
        headers
      })
        .then(res => res.json())
        .then(data => {
          if (data && data.status === "OK") {
            const locations = [];
            for (let i = 0; i < data.predictions.length; i++) {
              const prediction = data.predictions[i];

              locations.push({
                icon_url: null,
                predictionId: prediction.id,
                placeId: prediction.place_id,
                location_desc: prediction.description
              });
            }

            resolve(locations);
          } else {
            resolve([]);
          }
        })
        .catch(error => {
          console.log("Error: ", error);
          reject(error);
        });
    });
  }


  
  static fetchAddressDetails({ address }): Promise<GeocodeResponseDef> {
    const urlSearch = `${GOOGLE_API.ADDRESS_DETAILS}&address=${address}`;
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(urlSearch, {
        method: "GET",
        headers
      })
        .then(res => res.json())
        .then(data => {
          console.log("GeocodeResponseDef", data);
          resolve(data && data.results.length > 0 ? data.results[0] : []);
        })
        .catch(error => {
          console.log("Error: ", error);
          reject(error);
        });
    });
  }

  static fetchPlaceDetails({ placeId }): Promise<GooglePlaceDetailResponseDef> {
    const urlSearch = `${
      GOOGLE_API.PLACE_DETAILS
      }&placeid=${placeId}&fields=name,icon,geometry,formatted_address`;

    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(urlSearch, {
        method: "GET",
        headers
      })
        .then(res => res.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          console.log("Error: ", error);
          reject(error);
        });
    });
  }
}
