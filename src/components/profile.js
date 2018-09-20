import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";
import Activity from "./activity";
import UsersProfile from "./usersProfile";
import Account from "./acount";
import ProfileMenu from "./profileMenu";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.getProfile();
        this.state = {
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            myFlats: 0,
            rentedFlats: 0,
            menuStatus: "Profile"
        }
    }

    getProfile() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/get-profile')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    name: response.data.name,
                    surname: response.data.surname,
                    myFlats: response.data.flats.length,
                    email: response.data.email,
                    phoneNumber: response.data.phoneNumber
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return <div className="">
            <ProfileMenu/>


            <div className="d-flex justify-content-center">
                <div className="text-center text-muted">
                    <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png"
                         className="avatar rounded-circle img-thumbnail" alt="avatar" height="200px"
                         width="200px"/>
                    <h1 className="profile__title">Kasin Alexandr</h1>
                </div>
            </div>

            <UsersProfile/>


        </div>


    }
}

export default Profile;