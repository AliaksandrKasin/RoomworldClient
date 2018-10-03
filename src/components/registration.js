import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {SERVER} from "../constants/constants";
import STORE from "../store";
import addUser from "../actions/userActions/addUser";
import FieldRegistration from "./fieldRegistration";
import addName from "../actions/userActions/addName";
import addSurname from "../actions/userActions/addSurname";
import addPhoneNumber from "../actions/userActions/addPhoneNumber";
import addEmail from "../actions/userActions/addEmail";
import addPassword from "../actions/userActions/addPassword";
import addConfirmPassword from "../actions/userActions/addConfirmPassword";
import ReactPhoneInput from "react-phone-input-2";
import {isValidNumber} from "libphonenumber-js";
import connect from "react-redux/es/connect/connect";


class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValid: false,
            lastNameValid: false,
            numberPhoneValid: false,
            emailValid: false,
            passwordValid: false,
            confirmValid: false,

            errorMessageEmail: '',
            errorMessageNumber: "",
            errorMessageRequired: "This field is required.",
            errorMessagePassLength: "Password must be longer than 6 characters.",
            errorMessagePassNotMatch: "Passwords do not match."

        };

        STORE.dispatch(addUser({
            name: "",
            surname: "",
            role: "user",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: ""

        }));
    }

    static validateEmail(email) {
        let reg = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }

    checkName = () => {
        (!this.props.user.name.length) ? this.setState({nameValid: true}) : this.setState({nameValid: false});
        return (!this.props.user.name.length);
    }

    checkLastName = () => {
        (!this.props.user.surname.length) ? this.setState({lastNameValid: true}) : this.setState({lastNameValid: false});
        return (!this.props.user.surname.length);
    }

    checkPhoneNumber = () => {
        (!isValidNumber(this.props.user.phoneNumber)) ?
            this.setState({numberPhoneValid: true, errorMessageNumber: "This number is not valid"}) :
            this.setState({numberPhoneValid: false, errorMessageNumber: ""});
        return (!isValidNumber(this.props.user.phoneNumber));
    }

    checkEmail = () => {
        (!this.props.user.email.length || !Registration.validateEmail(this.props.user.email)) ?
            this.setState({emailValid: true, errorMessageEmail: "Incorrect email address"}) :
            this.setState({emailValid: false, errorMessageEmail: ""});
        return (!this.props.user.email.length || !Registration.validateEmail(this.props.user.email));
    }

    checkPassword = () => {
        (this.props.user.password.length < 6) ? this.setState({passwordValid: true}) : this.setState({passwordValid: false});
        return (this.props.user.password.length < 6);
    }

    checkConfirm = () => {
        (!this.props.user.confirmPassword.length || this.props.user.confirmPassword !== this.props.user.password) ?
            this.setState({confirmValid: true}) : this.setState({confirmValid: false});
        return (!this.props.user.confirmPassword.length || this.props.user.confirmPassword !== this.props.user.password);
    }

    validateForm = () => {
        return (this.checkName() || this.checkLastName() || this.checkPhoneNumber()
            || this.checkEmail() || this.checkPassword() || this.checkConfirm())
    }


    signUp = () => {
        if (this.validateForm()) return;

        axios.post(SERVER + '/registration', this.props.user)
            .then(function (response) {
                localStorage.setItem('accessToken', response.data.accessToken);
                window.location.href = '/home';
            })
            .catch((error) => {
                this.setState({emailValid: true, errorMessageEmail: 'This email already exist.'})
            });
    }

    render() {
        return <div className='container-fluid reg'>
            <form>

                <FieldRegistration content="First name" type="text"
                                   onChange={(e) => STORE.dispatch(addName(e.target.value))}
                                   placeholder="First name" onBlur={this.checkName}
                                   errorMessage={(this.state.nameValid) ? this.state.errorMessageRequired : null}/>


                <FieldRegistration content="Last name" type="text"
                                   onChange={(e) => STORE.dispatch(addSurname(e.target.value))}
                                   placeholder="Last name" onBlur={this.checkLastName}
                                   errorMessage={(this.state.lastNameValid) ? this.state.errorMessageRequired : null}/>


                <div className="mb-2">
                    <label>Phone Number</label>
                    <div className="error-message">{this.state.errorMessageNumber}</div>
                    <ReactPhoneInput defaultCountry="by" inputClass="w-100" onBlur={this.checkPhoneNumber}
                                     onChange={(value) => STORE.dispatch(addPhoneNumber(value))} required={true}/>
                </div>

                <FieldRegistration content="Email" type="email"
                                   onChange={(e) => STORE.dispatch(addEmail(e.target.value))}
                                   placeholder="example@examle.com" onBlur={this.checkEmail}
                                   errorMessage={this.state.errorMessageEmail}/>

                <FieldRegistration content="Password" type="password"
                                   onChange={(e) => STORE.dispatch(addPassword(e.target.value))}
                                   onBlur={this.checkPassword}
                                   errorMessage={(this.state.passwordValid) ? this.state.errorMessagePassLength : null}/>


                <FieldRegistration content="Confirm password" type="password"
                                   onChange={(e) => STORE.dispatch(addConfirmPassword(e.target.value))}
                                   onBlur={this.checkConfirm}
                                   errorMessage={(this.state.confirmValid) ? this.state.errorMessagePassNotMatch : null}/>

                <div className='mb-3 text-center'>
                    <button onClick={this.signUp}
                            className="btn btn-lg btn-primary"
                            type="button">Create account
                    </button>
                </div>

            </form>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.userRegistrationReducer.user
    };
}

export default connect(mapStateToProps)(Registration);