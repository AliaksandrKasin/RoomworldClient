import React from 'react';
import {Link} from "react-router-dom";
import {login} from "../../services/tokenService";
import AlertError from "../alertComponents/alertError";

class Login extends React.Component {

    constructor(props) {
        super(props);
        /*! create service for check token lifetime*/
        if (localStorage.getItem('accessToken')) this.props.history.push('/');
        this.state = {
            email: '',
            password: '',
            errorMessage: ""
        };
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    onSubmit = (e) => {
        login(this.state.email, this.state.password).then(() => {
            this.props.history.push('/');
        }).catch((error) => {
            this.setState({errorMessage: error.response.data});
        });
        e.preventDefault();
    }


    render() {
        return <div className="login-page">
            <div className="login-background"></div>
            <div className='container-login text-center'>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="d-flex align-items-center mb-4">
                        <Link to={'/'}>
                            <img className="img_size_4"
                                 src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                        </Link>
                        <h4 className="ml-2 font-weight-normal">Room World</h4>
                    </div>
                    <div className="text-left mb-3 ">
                        <h6>Returning customers</h6>
                        <small className="text-muted">If you are a registered user, please enter your email and
                            password.
                        </small>
                    </div>
                    <AlertError message={this.state.errorMessage}/>
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
                    <div className="text-left mb-1 mt-2">
                        <small className="ml-2 text-muted">
                            <span>No account?</span>
                            <Link to="/registration" className="ml-2">Create one!</Link>
                        </small>
                    </div>
                    <div className="text-left mb-3">
                        <Link to="password/reset">
                            <small className="ml-2 text-muted link">Forgot password?</small>
                        </Link>
                    </div>
                    <button type="submit" className="btn-next">Login</button>
                </form>
            </div>
        </div>
    }
}

export default Login