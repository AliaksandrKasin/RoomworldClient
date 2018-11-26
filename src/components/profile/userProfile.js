import * as React from "react";
import PhoneInput from "../phoneInput";
import connect from "react-redux/es/connect/connect";
import STORE from "../../store";
import changePhoneNumberProfile from "../../actions/profile/changePhoneNumber";
import changeNameProfile from "../../actions/profile/changeNameProfile";
import changeSurnameProfile from "../../actions/profile/changeSurname";
import axios from "axios";
import {SERVER} from "../../constants/constants";
import {isValidNumber} from "libphonenumber-js";
import addUserProfile from "../../actions/profile/addUser";
import changeProfile from "../../actions/profile/changeProfile";
import FormInput from "../registerFlatComponents/formInput";


class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonDisabled: true
        }

        this.getProfile();
    }

    getProfile = () => {
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

    checkChanges = () => {
        (this.props.changedProfile.name !== this.props.user.name
            || this.props.changedProfile.surname !== this.props.user.surname
            || this.props.changedProfile.phoneNumber !== this.props.user.phoneNumber) ?
            this.setState({buttonDisabled: false}) : this.setState({buttonDisabled: true});
    }

    onChangeName = value => {
        STORE.dispatch(changeNameProfile(value));
        this.checkChanges();
    }

    onChangeLastName = value => {
        STORE.dispatch(changeSurnameProfile(value));
        this.checkChanges();
    }

    onChangePhoneNumber = value => {
        STORE.dispatch(changePhoneNumberProfile(value));
        this.checkChanges();
    }

    render() {
        return <div className="container-profile">
            <div className="sub-container-profile border rounded_10 p-0">
                <div className="d-flex justify-content-center profile-top">
                    <div className="text-center profile-image position-relative">
                        <div className="position-absolute profile-pen">
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                        <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png"
                             className="profile-avatar rounded-circle img-thumbnail" alt="avatar" height="160px"
                             width="160px"/>
                    </div>

                </div>

                <div className="position-relative mt-5 m-4">

                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h2 className="profile__title">{this.props.user.name + " " + this.props.user.surname}</h2>
                        </div>
                    </div>



                    <div className="">
                        <div className="mt-3">
                            <FormInput placeholder="First name" type="text"
                                       onChange={this.onChangeName} value={this.props.changedProfile.name}/>
                        </div>

                        <div className="mt-3">
                            <FormInput placeholder="Second name" type="text"
                                       onChange={this.onChangeLastName} value={this.props.changedProfile.surname}/>
                        </div>

                        <div className="mt-3">
                            <FormInput placeholder="Email" type="email" value={this.props.user.email}/>
                        </div>
                        <div className="mt-3">
                            <PhoneInput type="tel" numberPhone={this.props.changedProfile.phoneNumber}
                                        onChange={this.onChangePhoneNumber} errorMessage="This number is not valid!"/>
                        </div>
                        <div className="text-center mt-5 mb-5">
                            <button onClick={this.saveChanges} className="btn-back"
                                    type='button' disabled={this.state.buttonDisabled}>Save Changes
                            </button>
                        </div>
                    </div>

                </div>
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

export default connect(mapStateToProps)(UserProfile);