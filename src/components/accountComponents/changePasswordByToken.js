import * as React from "react";
import AlertInfo from "../alertComponents/alertInfo";
import axios from "axios";
import {SERVER} from "../../constants/constants";
import { Redirect } from 'react-router';

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
        return <div className='container-fluid container-login'>
            <form className="form-signin text-center">
                <h1 className="h3 mb-3 font-weight-normal">Change password</h1>
                {
                    (this.state.alertMessage) ?
                        <AlertInfo onclickButtonClose={this.onClickButtonClose} message={this.state.alertMessage}
                                   type={this.state.alertType}/> : null
                }
                <input onChange={this.onChangePassword} className="form-control mb-3" placeholder="New password"
                       autoFocus type="password"/>
                <input onChange={this.onChangeConfirmPassword} className="form-control mb-3"
                       placeholder="Confirm password" type="password"/>
                <button onClick={this.changePassword} className="btn btn-lg btn-primary" type='button'>Reset password
                </button>
            </form>
        </div>
    }
}

export default ChangePasswordByToken;