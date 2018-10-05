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
import addUserProfile from "../actions/profile/addUser";
import changeProfile from "../actions/profile/changeProfile";
import Orders from "./Orders";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        STORE.dispatch(selectProfileMenu("Profile"));
        this.getProfile();
    }

    getProfile() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/user/profile')
            .then((response) => {
                STORE.dispatch(addUserProfile(response.data));
                STORE.dispatch(changeProfile({
                    name: response.data.name,
                    surname: response.data.surname,
                    phoneNumber: response.data.phoneNumber,
                    email: response.data.email
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }


    bodyProfile() {
        switch (this.props.selectedMenu) {
            case "Orders":
                return <Orders/>
            case "My flats":
                return <UsersFlats flats={this.props.user.flats}/>
            case "My booking":
                return <UsersOrders/>
            case "Profile":
                return <UsersProfile/>
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
        selectedMenu: state.flatReducer.selectedMenu,
        user: state.profileReducer.user
    };
}

export default connect(mapStateToProps)(Profile);
