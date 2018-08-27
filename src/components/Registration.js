import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


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

        this.state = {
            name: '',
            lastName: '',
            numberPhone: '',
            email: '',
            password: '',
            confirmPassword: '',
            confirmInvalid: true
        };


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
        if (e.target.value === this.state.password) {
            this.setState({confirmInvalid: true});
        } else {
            this.setState({confirmInvalid: false});
        }
    }


    signUp() {
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
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return <div className='container-fluid reg'>
            <form>
                <div className="mb-3">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" onChange={this.handleNameChange} className="form-control" id="first-name"
                           placeholder="First name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" onChange={this.handleLastNameChange} className="form-control" id="last-name"
                           placeholder="Last name" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="number-phone">Number phone</label>
                    <input type="tel" onChange={this.handleNumberPhoneChange} className="form-control" id="number-phone"
                           placeholder="+375(33) 111-11-11'" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={this.handleEmailChange} className="form-control" id="email"
                           placeholder="name@example.com" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={this.handlePasswordChange} className="form-control" id="password"
                           placeholder="" required autoComplete=""/>
                </div>

                <div className="mb-3">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input type="password" className="form-control" id="confirm-password" placeholder="" required
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