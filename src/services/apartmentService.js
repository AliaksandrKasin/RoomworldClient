import axios from "axios";
import {SERVER} from "../constants/constants";

export function getTypesApartment() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
    return axios.get(SERVER + '/apartment/types')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function createApartment(formData) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
   return axios.post(SERVER + '/apartment/create', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    });
}

export function getApartmentById(id) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
    return axios.get(SERVER + '/apartment/get',{params:{id: id}})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}