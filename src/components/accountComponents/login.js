import React from 'react';
import axios from 'axios';
import ErrorMessage from '../errorMessage';
import {SERVER} from "../../constants/constants";
import {Link} from "react-router-dom";


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
            {/* <div className="col-1 text-right container-social">
                <div className="mb-2">
                    <img className="img_size_5 button_cursor_pointer btn-social"
                         src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-512.png"/>
                </div>
                <div className="mb-2">
                    <img className="img_size_5 button_cursor_pointer btn-social"
                         src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-512.png"/>
                </div>

                <div className="mb-2">
                    <img className="img_size_5 button_cursor_pointer btn-social"
                         src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-512.png"/>
                </div>
            </div>*/}


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

            <div className="mr-3 ml-3 container-login-line">
                <div className="line border-right ml-2"></div>
                <div className="text-uppercase text-muted">or</div>
                <div className="line border-right ml-2"></div>
            </div>

            <div className="text-center social-button mt-5 mr-4">
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

            {/*<div className="container-new-customer text-left col-2 mt-5">
                <div className="text-left mb-2">
                    <h6>NEW CUSTOMERS</h6>
                    <small className="text-muted">Create your personalized Nixon account! You can track your orders,
                        update and share your
                        wishlist, edit billing/shipping info and more.
                    </small>
                </div>


                <Link to="/registration">
                    <button className="btn btn-dark btn-lg btn-primary text-uppercase" type='button'>Create account
                    </button>
                </Link>


                <div className="text-left mb-2 mt-3 ">
                    <h6 className="text-uppercase">Why create an account?</h6>
                    <ul className="text-muted pl-3 small">
                        <li>News and exclusive offers!</li>
                        <li>Order History</li>
                        <li>Faster Checkout</li>
                    </ul>
                </div>

            </div>*/}
        </div>
    }
}

export default Login