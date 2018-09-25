import * as React from "react";
import axios from "axios";
import {IMG_NOT_FOUND, SERVER} from "../constants/constants";
import Activity from "./activity";
import UsersProfile from "./usersProfile";
import Account from "./acount";
import ProfileMenu from "./profileMenu";
import CardFlat from "./cardFlat";
import UsersFlats from "./usersFlats";
import connect from "react-redux/es/connect/connect";

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
            menuStatus: "Profile",
            flats: [],
            orders: []
        }
    }

    getProfile() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/get-profile')
            .then((response) => {
                console.log(response.data);
                debugger
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

    bodyProfile(){
        switch (this.props.selectedMenu) {
            case "My flats": return <UsersFlats flats={this.state.flats}/>
            case "My booking": return <UsersFlats flats={this.state.orders.flat}/>
            case "Profile": return <UsersProfile name={this.state.name} surname={this.state.surname} email={this.state.email}
                                                 phoneNumber={this.state.phoneNumber}/>
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
