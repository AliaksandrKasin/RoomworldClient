import * as React from "react";
import axios from "axios";
import {SERVER} from "../../constants/constants";
import AlertInfo from "../alertComponents/alertInfo";
import * as EmailValidator from 'email-validator';
import {Link} from "react-router-dom";
import {resetPassword} from "../../services/tokenService";


class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            alertMessage: ""
        }
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    resetPassword = (e) => {
        resetPassword(this.state.email).then((response) => {

        });
        e.preventDefault();
    }

    render() {
        return <div>
            <div className="background-cover reset-background"></div>
            <div className='reset-form-container'>
                <form onSubmit={(e) => this.resetPassword(e)} className="reset-form">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="reset-form-content m-5">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img_size_4"
                                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                                <h4 className="ml-2 font-weight-normal">Room World</h4>
                            </div>
                            <h4 className="mb-3 font-weight-bold">Recover your account</h4>
                            <div className="mb-3">We can help you reset your password and security info. First, enter
                                your email address and fallow the instructions bellow.
                            </div>
                            <input onChange={this.handleEmailChange} className="form-control mb-4 reset-input"
                                   placeholder="Email address"
                                   autoFocus/>
                            <div className="row m-0 mb-3 flex-nowrap">
                                <div className="text-left col-sm">
                                    <Link to={'/login'}>
                                        <button className="btn-back reset-form-button" type='button'>Cancel</button>
                                    </Link>
                                </div>
                                <div className="text-right col-sm">
                                    <button className="btn-next reset-form-button" type='submit'>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    }
}

export default ResetPassword;
