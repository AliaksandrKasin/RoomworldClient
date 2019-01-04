import * as React from "react";
import {Link} from "react-router-dom";
import FieldRegistration from "./fieldRegistration";
import ReactPhoneInput from "react-phone-input-2";
import AlertError from "../alertComponents/alertError";
import {registration} from "../../services/tokenService";
import {isValidNumber} from "libphonenumber-js";

class RegistrationStart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                surname: "",
                username: "",
                phoneNumber: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            errorMessage: "",
            phoneNumberIsValid: true
        }
    }

    handleFormChange = (e) => {
        this.setState({user: Object.assign(this.state.user, {[e.target.name]: e.target.value})})
    }

    handlePhoneNumberChange = (value) => {
        this.setState({user: Object.assign(this.state.user, {phoneNumber: value})})
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (isValidNumber(this.state.user.phoneNumber)) {
            this.setState({phoneNumberIsValid: true});
        }
        else {
            this.setState({phoneNumberIsValid: false});
            return
        }
        if (this.state.user.password !== this.state.user.confirmPassword) {
            this.setState({errorMessage: "Passwords do not match."});
            return;
        }
        registration(this.state.user).then(() => {
            this.props.history.push('/');
        }).catch((error) => {
            (error.response) ? this.setState({errorMessage: error.response.data})
                : this.props.history.push('/error');
        });
    }

    render() {
        return <div>
            <div className="background-cover registration-background"></div>
            <div className='registration-form-container'>
                <form onSubmit={(e) => this.onSubmit(e)} className="registration-form">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="registration-form-content m-5">
                            <div className="d-flex align-items-center mb-4 ml-2">
                                <img className="img_size_4"
                                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                                <h4 className="ml-2 font-weight-normal">Room World</h4>
                            </div>
                            <h5 className="mb-3 ml-3">Create account</h5>
                            <h6 className="text-uppercase ml-3">Name</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="First name" type="text"
                                                       placeholder="First name"
                                                       name="name"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="Last name" type="text"
                                                       placeholder="Last name"
                                                       name="surname"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                            </div>
                            <h6 className="text-uppercase mt-2 ml-3">Contact information</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <div className="mb-2">
                                        <small className="pl-2 text-muted">Phone number</small>
                                        <ReactPhoneInput defaultCountry="by"
                                                         inputClass={(this.state.phoneNumberIsValid) ? "w-100 form-control" : "w-100 form-control invalid-input"}
                                                         required={true}
                                                         onChange={(value) => this.handlePhoneNumberChange(value)}
                                                         value={this.state.user.phoneNumber}/>
                                        <div className="error-message">
                                            {(this.state.phoneNumberIsValid) ? "" : "Incorrect phone number."}</div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="text-uppercase mt-3 ml-3">Login information</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="Email" type="email"
                                                       placeholder="example@examle.com"
                                                       name="email"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="Username"
                                                       placeholder="Username"
                                                       name="username"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                            </div>
                            <h6 className="text-uppercase mt-3 ml-3">Password</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="Password" type="password"
                                                       name="password"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="Confirm password" type="password"
                                                       name="confirmPassword"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                            </div>
                            <div className="ml-2">
                                <AlertError message={this.state.errorMessage}/>
                            </div>
                            <div className="row m-0 mb-2 mt-3 flex-nowrap">
                                <div className="text-left col-sm">
                                    <Link to={'/login'}>
                                        <button className="btn-back registration-button" type='button'>Cancel</button>
                                    </Link>
                                </div>
                                <div className="text-right col-sm">
                                    <button className="btn-next registration-button" type='submit'>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default RegistrationStart;
