import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";
import UsersProfile from "./usersProfile";
import ProfileMenu from "./profileMenu";
import UsersFlats from "./usersFlats";
import connect from "react-redux/es/connect/connect";
import UsersOrders from "./userOrders";
import Account from "./account";
import STORE from "../store";
import selectProfileMenu from "../actions/selectProfileMenu";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        STORE.dispatch(selectProfileMenu("Profile"));
        this.getProfile();
        this.state = {
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            myFlats: 0,
            rentedFlats: 0,
            menuStatus: "Profile",
            flats: [],
            orders: [],
            flatsOrders: []
        }
    }

    getProfile() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/user/profile')
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    surname: response.data.surname,
                    myFlats: response.data.flats.length,
                    email: response.data.email,
                    phoneNumber: response.data.phoneNumber,
                    flats: response.data.flats,
                    orders: response.data.orders
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    bodyProfile() {
        switch (this.props.selectedMenu) {
            case "My flats":
                return <UsersFlats flats={this.state.flats}/>
            case "My booking":
                return <UsersOrders/>
            case "Profile":
                return <UsersProfile name={this.state.name} surname={this.state.surname} email={this.state.email}
                                     phoneNumber={this.state.phoneNumber}/>
            case "Account":
                return <Account/>
        }
    }

    render() {
        return <div className="">
            <ProfileMenu/>
            {this.bodyProfile()}
        </div>


    }
}


function mapStateToProps(state) {
    return {
        selectedMenu: state.flatReducer.selectedMenu
    };
}

export default connect(mapStateToProps)(Profile);
