import * as React from "react";
import * as EmailValidator from "email-validator";
import axios from "axios";
import {SERVER} from "../../constants/constants";
import {Link} from "react-router-dom";
import AlertInfo from "../alertComponents/alertInfo";
import FieldRegistration from "./fieldRegistration";
import ReactPhoneInput from "react-phone-input-2";

class RegistrationStart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }


    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onClickButtonClose = () => {
        this.setState({
            alertType: "",
            alertMessage: ""
        });
    }

    resetPassword = () => {
        if (!EmailValidator.validate(this.state.email)) {
            this.setState({
                alertType: "error",
                alertMessage: "Invalid email address, check email again."
            });
            return;
        }
        axios.put(SERVER + '/password/reset/' + this.state.email)
            .then((response) => {
                this.setState({
                    alertType: "success",
                    alertMessage: "Message for reset password sent to the email " + this.state.email + ", check your email."
                });
            })
            .catch((error) => {
                this.setState({
                    alertType: "error",
                    alertMessage: "Email address " + this.state.email + " does not exist."
                });
            });
    }

    render() {
        return <div>
            <div className="recover-background"></div>
            <div className='recover-form-container'>
                <form className="registration-form recover-form">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="recover-form-content m-5">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img_size_4"
                                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                                <h4 className="ml-2 font-weight-normal">Room World</h4>
                            </div>
                            <h5 className="mb-3 font-weight-bold">Create account</h5>
                            <h6 className="text-uppercase">Name</h6>
                            <div className="row">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*First name" type="text"
                                                       placeholder="First name"
                                                       name="name"/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Last name" type="text"
                                                       placeholder="Last name"
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
                                                         required={true}/>
                                        <div className="error-message"></div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-uppercase mt-3">Login information</h6>
                            <div className="row">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Email" type="email"
                                                       placeholder="example@examle.com"
                                                       name="email"/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Username"
                                                       placeholder="Username"
                                                       name="username"/>
                                </div>
                            </div>

                            <h6 className="text-uppercase mt-3">Password</h6>
                            <div className="row">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Password" type="password"
                                                       name="password"/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Confirm password" type="password"
                                                       name="confirmPassword"/>
                                </div>
                            </div>


                            <div className="row m-0 mb-2 mt-3 flex-nowrap">
                                <div className="text-left col-sm">
                                    <Link to={'/'}>
                                        <button className="btn-back" type='button'>Cancel</button>
                                    </Link>
                                </div>
                                <div className="text-right col-sm">
                                    <button className="btn-next" type='button'
                                            disabled={this.state.alertType === "success"}
                                            onClick={this.resetPassword}>Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        (this.state.alertMessage) ?
                            <AlertInfo onclickButtonClose={this.onClickButtonClose}
                                       message={this.state.alertMessage}
                                       type={this.state.alertType}/> : null
                    }
                </form>

            </div>
        </div>
    }
}

export default RegistrationStart;
