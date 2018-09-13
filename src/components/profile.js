import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";
import Activity from "./activity";
import UsersProfile from "./usersProfile";
import Account from "./acount";

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
            rentedFlats: 0
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
        return <div className="container bootstrap snippet">

            <div className="row">

                <div className="col-sm-10"><h1
                    className="user-name">{this.state.name + " " + this.state.surname}</h1></div>
                <div className="col-sm-3">
                    <div className="text-center">
                        <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png"
                             className="avatar rounded-circle img-thumbnail" alt="avatar" height="250px"
                             width="250px"/>
                    </div>
                    <br/>
                    <Activity flats={this.state.myFlats}/>
                </div>
                <UsersProfile/>

            </div>
        </div>


    }
}

export default Profile;