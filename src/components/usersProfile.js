import * as React from "react";
import FieldProfile from "./fieldProfile";
import PhoneInput from "./phoneInput";
import connect from "react-redux/es/connect/connect";
import STORE from "../store";
import changePhoneNumberProfile from "../actions/profile/changePhoneNumber";
import changeNameProfile from "../actions/profile/changeNameProfile";
import changeSurnameProfile from "../actions/profile/changeSurname";
import axios from "axios";
import {SERVER} from "../constants/constants";
import {isValidNumber} from "libphonenumber-js";


class UsersProfile extends React.Component {

    constructor(props) {
        super(props);
        this.checkChanges = this.checkChanges.bind(this);

        this.state = {
            buttonDisabled: true
        }
    }


    saveChanges = () => {
        if (this.props.changedProfile.name.length < 1 || this.props.changedProfile.surname.length < 1 || !isValidNumber(this.props.changedProfile.phoneNumber)) {
            return;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.put(SERVER + '/user/change/profile', this.props.changedProfile)
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    checkChanges() {
        (this.props.changedProfile.name !== this.props.user.name
            || this.props.changedProfile.surname !== this.props.user.surname
            || this.props.changedProfile.phoneNumber !== this.props.user.phoneNumber) ?
            this.setState({buttonDisabled: false}) : this.setState({buttonDisabled: true});
    }

    onChangeName = event => {
        STORE.dispatch(changeNameProfile(event.target.value));
        this.checkChanges();
    }

    onChangeLastName = event => {
        STORE.dispatch(changeSurnameProfile(event.target.value));
        this.checkChanges();
    }

    onChangePhoneNumber = value => {
        STORE.dispatch(changePhoneNumberProfile(value));
        this.checkChanges();
    }

    render() {
        return <div className="col-md-9 container-profile">
            <div className="d-flex justify-content-center">
                <div className="text-center text-muted">
                    <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png"
                         className="avatar rounded-circle img-thumbnail" alt="avatar" height="200px"
                         width="200px"/>
                    <h1 className="profile__title">{this.props.user.name + " " + this.props.user.surname}</h1>
                </div>
            </div>

            <div className="container border rounded_10">
                <div className="row">
                    <div className="col-md-12 m-3 border-bottom">
                        <h4>Profile Information</h4>
                    </div>
                </div>

                <form className="ml-3">

                    <FieldProfile title="First Name:" type="text" input={this.props.changedProfile.name}
                                  onChange={this.onChangeName} errorMessage="This field is required!"/>
                    <FieldProfile title="Last Name:" type="text" input={this.props.changedProfile.surname}
                                  onChange={this.onChangeLastName} errorMessage="This field is required!"/>
                    <FieldProfile title="Email:" type="email" input={this.props.user.email} readonly={true}/>
                    <PhoneInput title="Phone Number:" type="tel" numberPhone={this.props.changedProfile.phoneNumber}
                                onChange={this.onChangePhoneNumber} errorMessage="This number is not valid!"/>


                    <div className="text-right mr-5 mt-4 mb-3">
                        <button onClick={this.saveChanges} className="btn btn-lg btn-primary rounded_10"
                                type='button' disabled={this.state.buttonDisabled}>Save Changes
                        </button>
                    </div>
                </form>

            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profileReducer,
        user: state.profileReducer.user,
        changedProfile: state.profileReducer.changedProfile
    };
}

export default connect(mapStateToProps)(UsersProfile);