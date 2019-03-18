import axios from "axios";
import {SERVER} from "../../constants";

export function getAllDialogs(skip, take) {
    return axios.get(SERVER + '/get/dialogs/all')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
}