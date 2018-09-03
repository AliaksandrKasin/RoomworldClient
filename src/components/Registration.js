import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ErrorMessage from "./ErrorMessage";
import {SERVER} from "../constants/Constants";


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleNumberPhoneChange = this.handleNumberPhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfPassChange = this.handleConfPassChange.bind(this);
        this.checkName = this.checkName.bind(this);
        this.checkLastName = this.checkLastName.bind(this);
        this.checkPhoneNumber = this.checkPhoneNumber.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkConfirm = this.checkConfirm.bind(this);

        this.state = {
            name: '',
            lastName: '',
            numberPhone: '',
            email: '',
            password: '',
            confirmPassword: '',
            nameValid: false,
            lastNameValid: false,
            numberPhoneValid: false,
            emailValid: false,
            passwordValid: false,
            confirmValid: false,
            formValid: false,
            errorMessageEmail: 'Incorrect email address'
        };


    }

    static validateEmail(email) {
        let reg = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }

    checkName() {
        let value = this.refs.name.value;
        if (value === '') {
            this.setState({nameValid: true});
            return true;
        } else {
            this.setState({nameValid: false});
            return false;
        }
    }

    checkLastName() {
        let value = this.refs.lastName.value;
        if (value === '') {
            this.setState({lastNameValid: true});
            return true;
        } else {
            this.setState({lastNameValid: false});
            return false;
        }
    }

    checkPhoneNumber() {
        let value = this.refs.phoneNumber.value;
        if (value === '') {
            this.setState({numberPhoneValid: true});
            return true;
        } else {
            this.setState({numberPhoneValid: false});
            return false;
        }
    }

    checkEmail() {
        let value = this.refs.email.value;
        if (value === '' || !Registration.validateEmail(value)) {
            this.setState({emailValid: true});
            return true;
        } else {
            this.setState({emailValid: false});
            return false;
        }
    }

    checkPassword() {
        let value = this.refs.password.value;
        if (value.length < 6) {
            this.setState({passwordValid: true});
            return true;
        } else {
            this.setState({passwordValid: false});
            return false;
        }
    }

    checkConfirm() {
        let value = this.refs.confirmPassword.value;
        if (value === '' || value !== this.refs.password.value) {
            this.setState({confirmValid: true});
            return true;
        } else {
            this.setState({confirmValid: false});
            return false;
        }
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleLastNameChange(e) {
        this.setState({lastName: e.target.value});
    }

    handleNumberPhoneChange(e) {
        this.setState({numberPhone: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});

    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleConfPassChange(e) {
        this.setState({confirmPassword: e.target.value});
    }

    signUp() {

        if (this.checkName() || this.checkLastName() || this.checkPhoneNumber() || this.checkEmail() ||
            this.checkPassword() || this.checkConfirm()) {
            return;
        }
        let tokenKey = 'accessToken';
        axios.post(SERVER + '/registration', {
            name: this.state.name,
            surname: this.state.lastName,
            phoneNumber: this.state.numberPhone,
            email: this.state.email,
            password: this.state.password,
            role: "user"
        })
            .then(function (response) {
                localStorage.setItem(tokenKey, response.data.accessToken);
                window.location.href = '/home';
            })
            .catch((error) => {
                this.setState({emailValid: true, errorMessageEmail: 'This email already exist.'})
            });
    }

    render() {
        return <div className='container-fluid reg'>
            <form>

                <div className="mb-3">
                    <label htmlFor="first-name">First name</label>
                    <ErrorMessage state={this.state.nameValid} content='This field required'/>
                    <input ref="name" type="text" onChange={this.handleNameChange} className="form-control"
                           id="first-name"
                           placeholder="First name" required onBlur={this.checkName} style={{borderColor: (this.state.nameValid) ? 'red':''}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="last-name">Last name</label>
                    <ErrorMessage state={this.state.lastNameValid} content='This field required'/>
                    <input ref="lastName" type="text" onChange={this.handleLastNameChange} className="form-control"
                           id="last-name"
                           placeholder="Last name" required onBlur={this.checkLastName} style={{borderColor: (this.state.lastNameValid) ? 'red':''}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="number-phone">Number phone</label>
                    <ErrorMessage state={this.state.numberPhoneValid} content='Incorrect number phone'/>
                    <input ref="phoneNumber" type="tel" onChange={this.handleNumberPhoneChange} className="form-control"
                           id="number-phone"
                           placeholder="+375(33) 111-11-11" required onBlur={this.checkPhoneNumber} style={{borderColor: (this.state.numberPhoneValid) ? 'red':''}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <ErrorMessage state={this.state.emailValid} content={this.state.errorMessageEmail}/>
                    <input ref="email" type="email" onChange={this.handleEmailChange} className="form-control"
                           id="email"
                           placeholder="name@example.com" required onBlur={this.checkEmail} style={{borderColor: (this.state.emailValid) ? 'red':''}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <ErrorMessage state={this.state.passwordValid} content='Incorrect password'/>
                    <input ref="password" type="password" onChange={this.handlePasswordChange} className="form-control"
                           id="password"
                           placeholder="" required autoComplete="" onBlur={this.checkPassword} style={{borderColor: (this.state.passwordValid) ? 'red':''}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <ErrorMessage state={this.state.confirmValid} content='Incorrect password'/>
                    <input ref="confirmPassword" type="password" className="form-control" id="confirm-password"
                           placeholder=""
                           required
                           onChange={this.handleConfPassChange}
                           autoComplete="" onBlur={this.checkConfirm} style={{borderColor: (this.state.confirmValid) ? 'red':''}}/>
                </div>


                <div className='mb-3 text-center'>
                    <button onClick={this.signUp} className="btn btn-lg btn-primary" type="button">Create account
                    </button>
                </div>
            </form>
        </div>
    }
}

export default Registration