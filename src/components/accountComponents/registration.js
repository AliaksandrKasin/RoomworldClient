import React from "react";
import axios from 'axios';
import {SERVER} from "../../constants/constants";
import STORE from "../../store";
import addUser from "../../actions/userActions/addUser";
import FieldRegistration from "./fieldRegistration";
import addName from "../../actions/userActions/addName";
import addSurname from "../../actions/userActions/addSurname";
import addPhoneNumber from "../../actions/userActions/addPhoneNumber";
import addEmail from "../../actions/userActions/addEmail";
import addPassword from "../../actions/userActions/addPassword";
import addConfirmPassword from "../../actions/userActions/addConfirmPassword";
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

        /*STORE.dispatch(addUser({
            name: "",
            surname: "",
            role: "1",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: ""

        }));*/
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
                window.location.href = '/';
            })
            .catch((error) => {
                this.setState({emailValid: true, errorMessageEmail: 'This email already exist.'})
            });
    }

    render() {
        return <div className='d-flex justify-content-center align-items-center mt-5 row'>
            <div className="col-sm-2 text-center social-button">
                 <div className="text-left pb-3 social-title mb-3 border-bottom">
                    <h5>Sing-up <span className="text-muted">with social account.</span></h5>
                </div>

                <div className="mb-2 text-uppercase btn-social-big">
                    <img className="img_size_4 text-left mr-3"
                         src="https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_google-128.png"/>
                    google +
                </div>
                <div className="mb-2 text-uppercase btn-social-big">
                    <img className="img_size_4 text-left mr-3"
                         src="https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-128.png"/>
                    facebook
                </div>

                <div className="mb-2 text-uppercase btn-social-big">
                    <img className="img_size_4 text-left mr-3"
                         src="https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_twitter-128.png"/>
                    <span>twitter</span>
                </div>

            </div>

            <div className="mr-3 ml-3 container-line">
                <div className="line border-right ml-2"></div>
                <div className="text-uppercase text-muted">or</div>
                <div className="line border-right ml-2"></div>
            </div>

            <div className="col-sm-6 mt-5 container-fields-reg">
                <h4 className="mb-5 font-weight-normal border-bottom pb-3">Sing-up <span className="text-muted">with new account.</span>
                </h4>
                <h6 className="text-uppercase">Name</h6>
                <div className="row">
                    <div className="col-sm container-register">
                        <FieldRegistration content="*First name" type="text"
                                           onChange={(e) => STORE.dispatch(addName(e.target.value))}
                                           placeholder="First name" onBlur={this.checkName}
                                           errorMessage={(this.state.nameValid) ? this.state.errorMessageRequired : null}/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Last name" type="text"
                                           onChange={(e) => STORE.dispatch(addSurname(e.target.value))}
                                           placeholder="Last name" onBlur={this.checkLastName}
                                           errorMessage={(this.state.lastNameValid) ? this.state.errorMessageRequired : null}/>
                    </div>
                </div>

                <h6 className="text-uppercase mt-2">Contact information</h6>
                <div className="row">
                    <div className="col-sm container-register">
                        <div className="mb-2">
                            <small className="pl-2 text-muted">*Phone number</small>
                            <ReactPhoneInput defaultCountry="by"
                                             inputClass={(this.state.numberPhoneValid) ? "w-100 form-control invalid-input" : "w-100 form-control"}
                                             onBlur={this.checkPhoneNumber}
                                             onChange={(value) => STORE.dispatch(addPhoneNumber(value))}
                                             required={true}/>
                            <div className="error-message">{this.state.errorMessageNumber}</div>
                        </div>
                    </div>
                </div>


                <h6 className="text-uppercase mt-3">Login information</h6>
                <div className="row">
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Email" type="email"
                                           onChange={(e) => STORE.dispatch(addEmail(e.target.value))}
                                           placeholder="example@examle.com" onBlur={this.checkEmail}
                                           errorMessage={this.state.errorMessageEmail}/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Username"
                                           onChange={(e) => STORE.dispatch(addEmail(e.target.value))}
                                           placeholder="Username" onBlur={this.checkEmail}
                                           errorMessage={this.state.errorMessageEmail}/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Password" type="password"
                                           onChange={(e) => STORE.dispatch(addPassword(e.target.value))}
                                           onBlur={this.checkPassword}
                                           errorMessage={(this.state.passwordValid) ? this.state.errorMessagePassLength : null}/>
                    </div>
                    <div className="col-sm container-register">
                        <FieldRegistration content="*Confirm password" type="password"
                                           onChange={(e) => STORE.dispatch(addConfirmPassword(e.target.value))}
                                           onBlur={this.checkConfirm}
                                           errorMessage={(this.state.confirmValid) ? this.state.errorMessagePassNotMatch : null}/>
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