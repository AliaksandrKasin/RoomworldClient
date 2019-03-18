import axios from "axios";
import {SERVER} from "../../constants";

export function sendFeedback(feedback, rating) {
    return axios.post(SERVER + '/feedback/send', {
        text: feedback,
        rating: rating
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw error;
    });
}