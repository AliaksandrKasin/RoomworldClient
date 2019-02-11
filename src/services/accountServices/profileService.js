import axios from "axios";
import {SERVER} from "../../constants";

export function changePassword(currentPassword, newPassword) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;/*!*/
    return axios.put(SERVER + '/user/change/password', {
        currentPassword: currentPassword,
        newPassword: newPassword
    }).then((response) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        return response;
    }).catch((error) => {
        throw error;
    });
}

export function changePasswordByToken(token, password) {
   return axios.put(SERVER + '/password/change', {token: token, password: password})
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
}