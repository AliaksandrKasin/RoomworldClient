import axios from "axios";

export function openStreetGeocode(params) {
    return axios.get('https://nominatim.openstreetmap.org/search?format=json&limit=100&addressdetails=1&accept-language=en-US&dedupe=0&q=' + params)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

/*?format=json&namedetails = 1&limit=1&addressdetails=1&q=Weißrussland&accept-language=en-US"*/