import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FieldRegistration from "./FieldRegistration";
import ErrorMessage from "./ErrorMessage";


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
        this.onBlurName = this.onBlurName.bind(this);
        this.onBlurLastName = this.onBlurLastName.bind(this);
        this.onBlurPhoneNumber = this.onBlurPhoneNumber.bind(this);
        this.onBlurEmail = this.onBlurEmail.bind(this);
        this.onBlurPassword = this.onBlurPassword.bind(this);
        this.onBlurConfirm = this.onBlurConfirm.bind(this);
        this.validateInput = this.validateInput.bind(this);

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


    validateInput(calback) {
        if (this.state.name === '') {
            this.setState({nameValid: true})
        } else {
            this.setState({nameValid: false})
        }
        calback();
    }

    validateEmail(email) {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }

    onBlurName() {
        if (this.state.name === '') {
            this.setState({nameValid: true})
        } else {
            this.setState({nameValid: false})
        }
    }

    onBlurLastName() {
        if (this.state.lastName === '') {
            this.setState({lastNameValid: true})
        } else {
            this.setState({lastNameValid: false})
        }
    }

    onBlurPhoneNumber() {
        if (this.state.numberPhone === '') {
            this.setState({numberPhoneValid: true})
        } else {
            this.setState({numberPhoneValid: false})
        }
    }

    onBlurEmail() {
        let value = this.state.email;
        if (value === '' || !this.validateEmail(value)) {
            this.setState({emailValid: true})
        } else {
            this.setState({emailValid: false})
        }
    }

    onBlurPassword() {
        if (this.state.password.length < 6) {
            this.setState({passwordValid: true});
        } else {
            this.setState({passwordValid: false});
        }
    }

    onBlurConfirm() {
        if (this.state.confirmPassword === '' || this.state.confirmPassword !== this.state.password) {
            this.setState({confirmValid: true});
        } else {
            this.setState({confirmValid: false});
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
        this.validateInput(function () {
            if (this.state.nameValid) {
                alert("dasfsd");
                return;
            }
            let tokenKey = 'accessToken';
            axios.post('https://localhost:5001/registration', {
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
                    console.log(response);
                })
                .catch((error) => {
                    this.setState({emailValid: true, errorMessageEmail: 'This email exist.'})
                    console.log(error.response.status);
                });
        });

    }

    render() {
        return <div className='container-fluid reg'>
            <form>
                <div className="mb-3">
                    <label htmlFor="first-name">First name</label>
                    <ErrorMessage state={this.state.nameValid} content='This field required'/>
                    <input type="text" onChange={this.handleNameChange} className="form-control" id="first-name"
                           placeholder="First name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="last-name">Last name</label>
                    <ErrorMessage state={this.state.lastNameValid} content='This field required'/>
                    <input type="text" onChange={this.handleLastNameChange} className="form-control" id="last-name"
                           placeholder="Last name" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="number-phone">Number phone</label>
                    <ErrorMessage state={this.state.numberPhoneValid} content='Incorrect number phone'/>
                    <input type="tel" onChange={this.handleNumberPhoneChange} className="form-control" id="number-phone"
                           placeholder="+375(33) 111-11-11'" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <ErrorMessage state={this.state.emailValid} content={this.state.errorMessageEmail}/>
                    <input type="email" onChange={this.handleEmailChange} className="form-control" id="email"
                           placeholder="name@example.com" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <ErrorMessage state={this.state.passwordValid} content='Incorrect password'/>
                    <input type="password" onChange={this.handlePasswordChange} className="form-control" id="password"
                           placeholder="" required autoComplete=""/>
                </div>

                <div className="mb-3">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <ErrorMessage state={this.state.confirmValid} content='Incorrect password'/>
                    <input type="password" className="form-control" id="confirm-password" placeholder="" required
                           onChange={this.handleConfPassChange}
                           autoComplete=""/>
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