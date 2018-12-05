import React from "react";
import axios from 'axios';
import {SERVER} from "../../constants/constants";
import FieldRegistration from "./fieldRegistration";
import ReactPhoneInput from "react-phone-input-2";
import {isValidNumber} from "libphonenumber-js";
import connect from "react-redux/es/connect/connect";
import Validation from "../../extends/validation";
import SocialSingUp from "./socialSingUp";
import ContainerLine from "./containerLine";


class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: "",
                surname: "",
                username: "",
                phoneNumber: "",
                email: "",
                password: ""
            },
            confirmPassword: "",
            nameIsValid: false,
            surnameIsValid: false,
            usernameIsValid: false,
            emailIsValid: false,
            passwordIsValid: false
        };
    }

    validateField = (e) => {
        let name = e.target.name;
        let validationState = name + "IsValid";
        let value = e.target.value;
        switch (name) {
            case "name":
            case "surname":
            case "username": {
                (value.length < 1) ? this.setState({[validationState]: false}) : this.setState({[validationState]: true});
                break;
            }

            case "email": {
                (Validation.validateEmail(value)) ? this.setState({[validationState]: true}) : this.setState({[validationState]: false});
                break;
            }

            case "password": {
                (value.length >= 6) ? this.setState({[validationState]: true}) : this.setState({[validationState]: false});
                break;
            }

            case "confirmPassword": {
                (value === this.state.user.password) ? this.setState({[validationState]: true}) : this.setState({[validationState]: false});
                break;
            }

        }
    }

    validateForm = () => {
        return (this.state.nameIsValid && this.state.surnameIsValid && this.state.usernameIsValid
            && this.state.emailIsValid && this.state.passwordIsValid && isValidNumber(this.state.user.phoneNumber));
    }


    signUp = () => {
        if (!this.validateForm()) {
            return;
        }
        axios.post(SERVER + '/registration', this.state.user)
            .then(function (response) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem("username", response.data.username);
                window.location.href = '/';
            })
            .catch((error) => {
                this.setState({emailValid: true, errorMessageEmail: 'This email already exist.'})
            });
    }

    render() {
        return <div className='d-flex justify-content-center align-items-center mt-5 row'>
            <div className="col-sm-2 text-center social-button">
                <SocialSingUp/>
            </div>
            <ContainerLine/>

            <div className="col-sm-6 mt-5 container-fields-reg">
                <h4 className="mb-5 font-weight-normal border-bottom pb-3">Sing-up with new account.</h4>
                <h6 className="text-uppercase">Name</h6>
                <div className="row">
                    <div className="col-sm container-register">
                        <FieldRegistration content="*First name" type="text"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {name: e.target.value})}, this.validateField(e))}
                                           placeholder="First name"
                                           errorMessage=""
                                           name="name"/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Last name" type="text"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {surname: e.target.value})}, this.validateField(e))}
                                           placeholder="Last name"
                                           errorMessage=""
                                           name="surname"/>
                    </div>
                </div>

                <h6 className="text-uppercase mt-2">Contact information</h6>
                <div className="row">
                    <div className="col-sm container-register">
                        <div className="mb-2">
                            <small className="pl-2 text-muted">*Phone number</small>
                            <ReactPhoneInput defaultCountry="by"
                                             inputClass={"w-100 form-control"}
                                             value={this.state.user.phoneNumber}
                                             onChange={(value) => this.setState({user: Object.assign(this.state.user, {phoneNumber: value})})}
                                             required={true}/>
                            <div className="error-message"></div>
                        </div>
                    </div>
                </div>


                <h6 className="text-uppercase mt-3">Login information</h6>
                <div className="row">
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Email" type="email"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {email: e.target.value})}, this.validateField(e))}
                                           placeholder="example@examle.com"
                                           errorMessage=""
                                           name="email"/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Username"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {username: e.target.value})}, this.validateField(e))}
                                           placeholder="Username"
                                           errorMessage=""
                                           name="username"/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Password" type="password"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {password: e.target.value})}, this.validateField(e))}
                                           errorMessage=""
                                           name="password"/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Confirm password" type="password"
                                           onChange={(e) => this.setState({confirmPassword: e.target.value}, this.validateField(e))}
                                           errorMessage=""
                                           name="confirmPassword"/>
                    </div>
                </div>

                <div className='mb-3 mt-5 text-center'>
                    <button onClick={this.signUp} className="btn btn-lg btn-primary btn-light"
                            type="button">Create account
                    </button>
                </div>

            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.userRegistrationReducer.user
    };
}

export default connect(mapStateToProps)(Registration);