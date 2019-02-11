import * as React from "react";
import FormInput from "../baseComponents/formInput";
import {Link} from "react-router-dom";
import {changePassword} from "../../services/accountServices/profileService";
import AlertError from "../alertComponents/alertError";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            errorMessage: ""
        };
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


    changePassword = (e) => {
        e.preventDefault();
        if (this.state.newPassword !== this.state.confirmPassword) {
            this.setState({errorMessage: "Passwords do not match."});
            return;
        }
        changePassword(this.state.currentPassword, this.state.newPassword).then(() => {
            this.props.history.push('/login');
        }).catch(error => {
            (error.response) ? this.setState({errorMessage: error.response.data})
                : this.props.history.push('/error');
        })
    }

    render() {
        return <div className="container-change-pass d-flex justify-content-center">
            <form onSubmit={(e) => this.changePassword(e)} className="w-50">
                <div className="container text-center mt-5 w-75">
                    <div>
                        <h3 className="mb-4">Change password</h3>
                        <small>A strong password helps prevent unauthorized access to your email
                            account.
                        </small>
                        <AlertError message={this.state.errorMessage}/>
                        <div className="mt-4">
                            <FormInput placeholder="Current password" type="password" minLength={6} required={true}
                                       autoComplete="autoComplete"
                                       onChange={this.onChangeCurrentPassword}/>
                        </div>
                        <div className="text-left mb-3">
                            <Link to="/password/reset">
                                <small className="ml-2 text-muted link">Forgot password?</small>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <FormInput placeholder="New password" type="password" minLength={6} required={true}
                                       autoComplete="autoComplete"
                                       onChange={this.onChangeNewPassword}/>
                        </div>
                        <div className="mt-4 mb-4">
                            <FormInput placeholder="Confirm password" type="password" minLength={6} required={true}
                                       autoComplete="autoComplete"
                                       onChange={this.onChangeConfirmPassword}/>
                        </div>
                    </div>
                    <button className="btn-back mb-3" type='submit'>Change</button>
                </div>
            </form>
        </div>
    }
}

export default Account;