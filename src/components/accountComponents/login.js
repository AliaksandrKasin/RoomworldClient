import React from 'react';
import axios from 'axios';
import ErrorMessage from '../errorMessage';
import {SERVER} from "../../constants/constants";
import {Link} from "react-router-dom";
import SocialSingUp from "./socialSingUp";
import ContainerLine from "./containerLine";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        if (localStorage.getItem('accessToken')) window.location.href = '/';
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
                localStorage.setItem("username", response.data.username);
                window.location.href = '/';
            })
            .catch((error) => {
                this.setState({errorMessage: true});
            });
    }

    render() {
        return <div className='container-login mt-5'>
            <form className="col-sm-4 col-md-3 text-center min-width">
                <h1 className="h3 mb-5 font-weight-normal text-uppercase border-bottom">My account login</h1>

                <div className="text-left mb-3 ">
                    <h6>RETURNING CUSTOMERS</h6>
                    <small className="text-muted">If you are a registered user, please enter your email and password.
                    </small>
                </div>

                <div className="text-left mb-2">
                    <small className="pl-2 text-muted">*Email address</small>
                    <input type="email" onChange={this.handleEmailChange} className="form-control form-login"
                           placeholder="Email address" required
                           autoFocus/>
                </div>
                <div className="text-left">
                    <small className="pl-2 text-muted">*Password</small>
                    <input type="password" onChange={this.handlePasswordChange} className="form-control form-login"
                           placeholder="Password" required autoComplete="on"/>
                </div>

                <div className="text-left mb-3">
                    <Link to="password/reset">
                        <small className="ml-2 text-muted link">Forgot password?</small>
                    </Link>
                </div>

                <ErrorMessage state={this.state.errorMessage} content="Incorrect Email or password."/>
                <button onClick={this.signIn} className="btn btn-lg btn-primary btn-light text-uppercase"
                        type='button'>Login
                </button>
            </form>

           <ContainerLine/>

            <div className="text-center social-button mt-5 mr-4">
                <SocialSingUp/>
            </div>
        </div>
    }
}

export default Login