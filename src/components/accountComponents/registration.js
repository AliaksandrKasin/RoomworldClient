import React from "react";
import axios from 'axios';
import {SERVER} from "../../constants/constants";
import FieldRegistration from "./fieldRegistration";
import ReactPhoneInput from "react-phone-input-2";
import {isValidNumber} from "libphonenumber-js";
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
            validate: {
                nameIsValid: {state: false, message: ""},
                surnameIsValid: {state: false, message: ""},
                usernameIsValid: {state: false, message: ""},
                emailIsValid: {state: false, message: ""},
                passwordIsValid: {state: false, message: ""},
                confirmPasswordIsValid: {state: false, message: ""}
            },
            confirmPassword: "",
        };
    }

    setStateValidation = (nameObject, state, message) => {
        Object.assign(this.state.validate, {
            [nameObject]: Object.assign(this.state.validate[nameObject], {state: state, message: message})
        });
    }

    validateField = (e) => {

        let name = e.target.name;
        let nameValidationObj = name + "IsValid";
        let value = e.target.value;
        switch (name) {
            case "name":
            case "surname":
            case "username": {
                (value.length < 1) ? this.setStateValidation(nameValidationObj, false, "This field is required")
                    : this.setStateValidation(nameValidationObj, true, "");
                break;
            }

            case "email": {
                (Validation.validateEmail(value)) ? this.setStateValidation(nameValidationObj, true, "")
                    : this.setStateValidation(nameValidationObj, false, "Invalid email address");
                break;
            }

            case "password": {
                (value.length >= 6) ? this.setStateValidation(nameValidationObj, true, "")
                    : this.setStateValidation(nameValidationObj, false, "Password must be longer than 6 characters");
                break;
                /*add verification confirm when confirm exist => change pass*/
            }

            case "confirmPassword": {
                (value === this.state.user.password) ? this.setStateValidation(nameValidationObj, true, "")
                    : this.setStateValidation(nameValidationObj, false, "Passwords don't match");
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
        console.log(this.state.user);
        console.log(this.state.confirmPassword);
        console.log(this.state.validate);
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
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {name: e.target.value})})}
                                           onBlur={this.validateField}
                                           placeholder="First name"
                                           errorMessage={(this.state.validate.nameIsValid.message) && this.state.validate.nameIsValid.message}
                                           name="name"/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Last name" type="text"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {surname: e.target.value})}, this.validateField(e))}
                                           placeholder="Last name"
                                           errorMessage={(this.state.validate.surnameIsValid.message) && this.state.validate.surnameIsValid.message}
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
                                           errorMessage={(this.state.validate.emailIsValid.message) && this.state.validate.emailIsValid.message}
                                           name="email"/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Username"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {username: e.target.value})}, this.validateField(e))}
                                           placeholder="Username"
                                           errorMessage={(this.state.validate.usernameIsValid.message) && this.state.validate.usernameIsValid.message}
                                           name="username"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Password" type="password"
                                           onChange={(e) => this.setState({user: Object.assign(this.state.user, {password: e.target.value})}, this.validateField(e))}
                                           errorMessage={(this.state.validate.passwordIsValid.message) && this.state.validate.passwordIsValid.message}
                                           name="password"/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Confirm password" type="password"
                                           onChange={(e) => this.setState({confirmPassword: e.target.value}, this.validateField(e))}
                                           errorMessage={(this.state.validate.confirmPasswordIsValid.message) && this.state.validate.confirmPasswordIsValid.message}
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

export default Registration;