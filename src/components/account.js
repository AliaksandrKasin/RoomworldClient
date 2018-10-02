import * as React from "react";
import AccountField from "./accountField";
import ErrorMessage from "./errorMessage";
import axios from "axios";
import {SERVER} from "../constants/constants";

class Account extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            invalidPassword: false
        }

        this.changePassword = this.changePassword.bind(this);
    }

    onChangeCurrentPassword = event => {
        this.setState({currentPassword: event.target.value});
    }

    onChangeNewPassword = event => {
        this.setState({newPassword: event.target.value});
    }

    onChangeConfirmPassword = event => {
        this.setState({confirmPassword: event.target.value});
    }

    changePassword() {
        if (this.state.newPassword !== this.state.confirmPassword && this.state.newPassword.length >= 6) {
            this.setState({invalidPassword: true});
            return;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/user/change/password', {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword
        })
            .then((response) => {
                localStorage.removeItem('accessToken');
                window.location.href = "/login";
            })
            .catch((error) => {
                this.setState({invalidPassword: true});
            });
    }

    render() {
        return <div className="container-change-pass">
            <div className="container text-center mt-5 border rounded_10">

                <h3 className="text-muted mb-5">Change password</h3>

                <ErrorMessage state={this.state.invalidPassword} content="Incorrect Password"/>
                <AccountField title="Current password:" onChange={this.onChangeCurrentPassword}/>
                <AccountField title="New password:" onChange={this.onChangeNewPassword}/>
                <AccountField title="Confirm password:" onChange={this.onChangeConfirmPassword}/>

                <button onClick={this.changePassword} className="btn btn-lg btn-primary rounded_10 mb-3"
                        type='button'>Change
                </button>

            </div>
        </div>
    }
}

export default Account;