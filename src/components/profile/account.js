import * as React from "react";
import axios from "axios";
import {SERVER} from "../../constants/constants";
import FormInput from "../registerFlatComponents/formInput";
import {Link} from "react-router-dom";

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        }
    }

    onChangeCurrentPassword = value => {
        this.setState({currentPassword: value});
    }

    onChangeNewPassword = value => {
        this.setState({newPassword: value});
    }

    onChangeConfirmPassword = value => {
        this.setState({confirmPassword: value});
    }


    changePassword = () => {
        if (this.state.newPassword !== this.state.confirmPassword || this.state.newPassword.length < 6) {
            this.setState({invalidPasswordMessage: "Invalid password"});
            return;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.put(SERVER + '/user/change/password', {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword
        })
            .then((response) => {
                localStorage.removeItem('accessToken');
                window.location.href = "/login";
            })
            .catch((error) => {
                this.setState({invalidPasswordMessage: "Invalid password"});
            });
    }

    render() {

        return <div className="container-change-pass d-flex justify-content-center">
            <div className="container text-center mt-5">

                <h3 className="mb-4">Change password</h3>

                <small>A strong password helps prevent unauthorized access to your email
                    account.
                </small>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="w-75">
                        <div className="mt-4">
                            <FormInput placeholder="Current password" type="password"
                                       onChange={this.onChangeCurrentPassword}/>
                        </div>
                        <div className="text-left mb-3">
                            <Link to="password/reset">
                                <small className="ml-2 text-muted link">Forgot password?</small>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <FormInput placeholder="New password" type="password" onChange={this.onChangeNewPassword}/>
                        </div>
                        <div className="mt-4 mb-4">
                            <FormInput placeholder="Confirm password" type="password"
                                       onChange={this.onChangeConfirmPassword}/>
                        </div>
                    </div>
                </div>

                <button onClick={this.changePassword} className="btn-back mb-3"
                        type='button'>Change
                </button>

            </div>
        </div>
    }
}

export default Account;