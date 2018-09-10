import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.getProfile();
        this.state = {
            name: "",
            surname: "",
            email:"",
            phoneNumber:"",
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
                    <ul className="list-group">
                        <li className="list-group-item text-muted">Activity</li>
                        <li className="list-group-item text-left"><span
                            className="pull-left"><strong>My flats: </strong></span> {this.state.myFlats}
                        </li>
                        <li className="list-group-item text-left"><span
                            className="pull-left"><strong>Rented flats: </strong></span> 0
                        </li>
                        <li className="list-group-item text-left"><span
                            className="pull-left"><strong>Messages: </strong></span> 0
                        </li>
                    </ul>
                </div>
                <div className="col-md-9 profile-container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Your Profile</h4>
                                    <hr/>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <form>

                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label">First Name</label>
                                        <div class="col-8">
                                            <input id="name" name="name"
                                                   class="form-control here"
                                                   type="text" value={this.state.name}/>
                                        </div>

                                    </div>

                                    <div class="form-group row">
                                        <label for="text" class="col-4 col-form-label">Last Name</label>
                                        <div class="col-8">
                                            <input id="text" name="text"
                                                   class="form-control here"
                                                   required="required" type="text" value={this.state.surname}/>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="email" class="col-4 col-form-label">Email</label>
                                        <div class="col-8">
                                            <input id="email" name="email"  class="form-control here"
                                                   required="required" type="text" value={this.state.email}/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="phone-number" class="col-4 col-form-label">Phone Number</label>
                                        <div class="col-8">
                                            <input id="phone-number" name="phone-number"
                                                   class="form-control here"
                                                   type="text" value={this.state.phoneNumber} />
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }
}

export default Profile;