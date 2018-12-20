import * as React from "react";
import AlertInfo from "../alertComponents/alertInfo";
import axios from "axios";
import {SERVER} from "../../constants/constants";
import { Redirect } from 'react-router';
import {Link} from "react-router-dom";

class ChangePasswordByToken extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertType: "",
            alertMessage: "",
            resetToken: props.match.params.token,
            password: "",
            confirmPassword: ""
        }
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value});
    }

    onChangeConfirmPassword = (e) => {
        this.setState({confirmPassword: e.target.value});
    }

    onClickButtonClose = () => {
        this.setState({
            alertType: "",
            alertMessage: ""
        });
    }

    changePassword = () => {
        if (this.state.password.length < 6) {
            this.setState({
                alertType: "error",
                alertMessage: "Password must be more than 6 characters."
            });
            return
        }
        if(this.state.password !== this.state.confirmPassword){
            this.setState({
                alertType: "error",
                alertMessage: "Passwords do not match."
            });
            return
        }
        axios.put(SERVER + '/password/change', {token: this.state.resetToken, password: this.state.password})
            .then((response) => {
                window.location.href = "/login";
            })
            .catch((error) => {

            });
    }

    render() {
        return <div>
            <div className="recover-background"></div>
            <div className='recover-form-container'>
                <form className="recover-form">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="w-100 recover-form-content m-5">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img_size_4"
                                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                                <h4 className="ml-2 font-weight-normal">Room World</h4>
                            </div>
                            <h4 className="mb-3 font-weight-bold">Change your password</h4>
                            <input onChange={this.onChangePassword} type="password" className="form-control mb-4 recover-input"
                                   placeholder="Password"
                                   autoFocus/>
                            <input onChange={this.onChangeConfirmPassword} type="password" className="form-control mb-4 recover-input"
                                   placeholder="Confirm password"/>
                            <div className="row m-0 mb-3 flex-nowrap">
                                <div className="text-left col-sm">
                                    <Link to={'/'}>
                                        <button className="btn-back" type='button'>Cancel</button>
                                    </Link>
                                </div>
                                <div className="text-right col-sm">
                                    <button className="btn-next" type='button'
                                            disabled={this.state.alertType === "success"}
                                            onClick={this.changePassword}>Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        (this.state.alertMessage) ?
                            <AlertInfo onclickButtonClose={this.onClickButtonClose}
                                       message={this.state.alertMessage}
                                       type={this.state.alertType}/> : null
                    }
                </form>
            </div>
        </div>
    }
}

export default ChangePasswordByToken;