import axios from "axios";
import jwt_decode from "jwt-decode";
import * as React from "react";

class AjaxService extends React.Component{
    tokenIsExpired = () => {
        if (localStorage.getItem("accessToken") === null) return false;
        let decodedToken = jwt_decode(localStorage.getItem("accessToken"));
        return (decodedToken.exp < (Date.now() / 1000));
    }

    static post = (url, params) =>{
        return axios.post(url, params).then((response) => {
            return response;
        }).catch((error) => {
            throw error
        })
    }
}

export default AjaxService;