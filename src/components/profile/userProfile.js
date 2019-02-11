import * as React from "react";
import PhoneInput from "../baseComponents/phoneInput";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {SERVER} from "../../constants";
import {isValidNumber} from "libphonenumber-js";
import FormInput from "../baseComponents/formInput";
import Loading from "../extensionComponents/loading";
import Validation from "../../extends/validation";


class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imageProfile: "https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png",
            loading: true,
            profile: {},
            changedProfile: {}
        }
        this.uploader = React.createRef();
        this.getProfile();
    }

    getProfile = () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/user/profile')
            .then((response) => {
                this.setState({profile: response.data, changedProfile: response.data, loading: false});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    validationProfile = () => {
    }

    saveChanges = () => {
        if (this.state.changedProfile.name.length < 1 || this.state.changedProfile.surname.length < 1
            || !isValidNumber(this.state.changedProfile.phoneNumber)) {
            return;
        }

        let form = new FormData();
        form.append("File", this.uploader.current.files[0]);
        form.append("name", this.state.changedProfile.name);
        form.append("surname", this.state.changedProfile.surname);
        form.append("email", this.state.changedProfile.email);
        form.append("phoneNumber", this.state.changedProfile.phoneNumber);

        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.put(SERVER + '/user/change/profile', form, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }

    checkChanges = () => {
        return (this.state.changedProfile.name !== this.state.profile.name || this.state.changedProfile.surname !== this.state.profile.surname
            || this.state.changedProfile.phoneNumber !== this.state.profile.phoneNumber);
    }

    onChangeName = value => {
        this.setState({changedProfile: Object.assign({}, this.state.changedProfile, {name: value})});
    }

    onChangeLastName = value => {
        this.setState({changedProfile: Object.assign({}, this.state.changedProfile, {surname: value})});
    }

    onChangePhoneNumber = value => {
        this.setState({changedProfile: Object.assign({}, this.state.changedProfile, {phoneNumber: value})});
    }

    onChangeSelectPictures = event => {
        if (event.target.files.length !== 0 && event.target.files[0].type.match("image")) {
            this.setState({imageProfile: URL.createObjectURL(event.target.files[0])});
        }
    }

    render() {
        return (!Validation.objectIsEmpty(this.state.changedProfile) && this.state.loading) ? <Loading/> :
            <div className="container-profile">
                <div className="sub-container-profile border rounded_10 p-0">
                    <div className="d-flex justify-content-center profile-top">
                        <div onClick={() => this.uploader.current.click()}
                             className="text-center profile-image rounded-circle position-relative">
                            <div className="position-absolute profile-pen">
                                <i className="fas fa-pencil-alt"></i>
                            </div>
                            <img src={this.state.imageProfile}
                                 className="profile-avatar rounded-circle img-thumbnail" alt="avatar" height="160px"
                                 width="160px"/>
                            <input ref={this.uploader} onChange={this.onChangeSelectPictures} type="file"
                                   accept="image/*"
                                   className="profile-input-file"/>
                        </div>
                    </div>
                    <div className="position-relative mt-5 m-4">
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <h2 className="profile__title">{this.state.profile.name + " " + this.state.profile.surname}</h2>
                            </div>
                        </div>
                        <div className="">
                            <div className="mt-3">
                                <FormInput placeholder="First name" type="text"
                                           onChange={this.onChangeName} value={this.state.changedProfile.name}/>
                            </div>

                            <div className="mt-3">
                                <FormInput placeholder="Second name" type="text"
                                           onChange={this.onChangeLastName} value={this.state.changedProfile.surname}/>
                            </div>

                            <div className="mt-3">
                                <FormInput placeholder="Email" type="email" value={this.state.profile.email}/>
                            </div>
                            <div className="mt-3">
                                <PhoneInput type="tel" numberPhone={this.state.changedProfile.phoneNumber}
                                            onChange={this.onChangePhoneNumber}
                                            errorMessage="This number is not valid!"/>
                            </div>
                            <div className="text-center mt-5 mb-5">
                                <button onClick={this.saveChanges} className="btn-back"
                                        type='button' disabled={!this.checkChanges()}>Save Changes
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
        profile: state.profileReducer.profile,
        changedProfile: state.profileReducer.changedProfile
    };
}

export default connect(mapStateToProps)(UserProfile);