import * as React from "react";
import {Link} from "react-router-dom";
import FieldRegistration from "./fieldRegistration";
import ReactPhoneInput from "react-phone-input-2";
import AlertError from "../alertComponents/alertError";
import {registration} from "../../services/tokenService";

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
            errorMessage: ""
        }
    }

    handleFormChange = (e) => {
        this.setState({user: Object.assign(this.state.user, {[e.target.name]: e.target.value})})
    }

    handlePhoneNumberChange = (value) => {
        this.setState({user: Object.assign(this.state.user, {phoneNumber: value})})
    }

    onSubmit = (e) => {
        let a = this.state.user;
        debugger
        registration(this.state.user).then(() => {
            this.props.history.push('/');
        }).catch((error) => {
            this.setState({errorMessage: error.response.data});
        });
        e.preventDefault();
    }


    render() {
        return <div>
            <div className="recover-background"></div>
            <div className='registration-form-container'>
                <form onSubmit={(e) => this.onSubmit(e)} className="registration-form">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="recover-form-content m-5">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img_size_4"
                                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                                <h4 className="ml-2 font-weight-normal">Room World</h4>
                            </div>
                            <h5 className="mb-3">Create account</h5>
                            <AlertError message={this.state.errorMessage}/>
                            <h6 className="text-uppercase">Name</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*First name" type="text"
                                                       placeholder="First name"
                                                       name="name"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Last name" type="text"
                                                       placeholder="Last name"
                                                       name="surname"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                            </div>
                            <h6 className="text-uppercase mt-2">Contact information</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <div className="mb-2">
                                        <small className="pl-2 text-muted">*Phone number</small>
                                        <ReactPhoneInput defaultCountry="by"
                                                         inputClass={"w-100 form-control"}
                                                         required={true}
                                                         onChange={(value) => this.handlePhoneNumberChange(value)}
                                                         value={this.state.user.phoneNumber}/>
                                        <div className="error-message"></div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="text-uppercase mt-3">Login information</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Email" type="email"
                                                       placeholder="example@examle.com"
                                                       name="email"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Username"
                                                       placeholder="Username"
                                                       name="username"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                            </div>
                            <h6 className="text-uppercase mt-3">Password</h6>
                            <div className="row m-0">
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Password" type="password"
                                                       name="password"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                                <div className="col-sm container-register">
                                    <FieldRegistration content="*Confirm password" type="password"
                                                       name="confirmPassword"
                                                       required={true}
                                                       onChange={this.handleFormChange}/>
                                </div>
                            </div>
                            <div className="row m-0 mb-2 mt-3 flex-nowrap">
                                <div className="text-left col-sm">
                                    <Link to={'/'}>
                                        <button className="btn-back" type='button'>Cancel</button>
                                    </Link>
                                </div>
                                <div className="text-right col-sm">
                                    <button className="btn-next" type='submit'>Create</button>
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
