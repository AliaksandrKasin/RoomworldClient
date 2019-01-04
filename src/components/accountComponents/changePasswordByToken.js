import * as React from "react";
import {Link} from "react-router-dom";
import {changePasswordByToken} from "../../services/profileService";
import AlertError from "../alertComponents/alertError";

class ChangePasswordByToken extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resetToken: props.match.params.token,
            password: "",
            confirmPassword: "",
            alertMessage: ""
        }
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value});
    }

    onChangeConfirmPassword = (e) => {
        this.setState({confirmPassword: e.target.value});
    }

    changePassword = (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({alertMessage: "Passwords do not match."});
            return;
        }
        changePasswordByToken(this.state.resetToken, this.state.password)
            .then((response) => {
                this.props.history.push('/login');
            })
            .catch((error) => {
                (error.response) ? this.setState({errorMessage: error.response.data})
                    : this.props.history.push('/error');
            });
    }

    render() {
        return <div>
            <div className="background-cover reset-background"></div>
            <div className='reset-form-container'>
                <form onSubmit={(e) => this.changePassword(e)} className="reset-form">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="reset-form-content m-5">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img_size_4"
                                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                                <h4 className="ml-2 font-weight-normal">Room World</h4>
                            </div>
                            <h4 className="mb-4 font-weight-bold">Change your password</h4>
                            <AlertError message={this.state.alertMessage}/>
                            <input onChange={this.onChangePassword}
                                   type="password"
                                   className="form-control mb-4 reset-input"
                                   placeholder="Password"
                                   required={true}
                                   autoFocus
                                   minLength={6}/>
                            <input onChange={this.onChangeConfirmPassword}
                                   type="password"
                                   className="form-control mb-4 reset-input"
                                   placeholder="Confirm password"
                                   minLength={6}
                                   required={true}/>
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

export default ChangePasswordByToken;