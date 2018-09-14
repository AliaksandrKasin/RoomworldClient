import React from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ErrorMessage from './errorMessage';
import {SERVER} from "../constants/constants";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        if (!!localStorage.getItem('accessToken')) window.location.href = '/home';
        this.state = {
            email: '',
            password: '',
            errorMessage: false
        };
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    signIn() {
        let tokenKey = 'accessToken';
        axios.post(SERVER + '/token', {
            email: this.state.email,
            password: this.state.password
        })
            .then((response) => {
                localStorage.setItem(tokenKey, response.data.accessToken);
                window.location.href = '/home';
            })
            .catch((error) => {
                this.setState({errorMessage: true});
            });
    }

    render() {
        return <div className='container-fluid container-login'>
            <form className="form-signin text-center">
                <ErrorMessage state={this.state.errorMessage} content="Incorrect Email or password."/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control"
                       placeholder="Email address" required
                       autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control"
                       placeholder="Password" required autoComplete="on"/>

                <button onClick={this.signIn} className="btn btn-lg btn-primary" type='button'>Sing in
                </button>
            </form>
        </div>
    }
}

export default Login