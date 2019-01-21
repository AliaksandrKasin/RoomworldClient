import axios from "axios";
import {SERVER} from "../constants/constants";

export function getTypesApartment() {
    /*return axios.get(SERVER + '/apartment/types')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });*/
    return ["Apartment", "Cabin", "Cottage"];
}