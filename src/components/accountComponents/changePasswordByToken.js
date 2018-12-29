import * as React from "react";
import axios from "axios";
import {SERVER} from "../../constants/constants";
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

    changePassword = () => {
        if (this.state.password.length < 6) {
            this.setState({
                alertType: "error",
                alertMessage: "Password must be more than 6 characters."
            });
            return
        }
        if (this.state.password !== this.state.confirmPassword) {
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
            <div className="background-cover reset-background"></div>
            <div className='reset-form-container'>
                <form onSubmit={this.changePassword} className="reset-form">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="reset-form-content m-5">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img_size_4"
                                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                                <h4 className="ml-2 font-weight-normal">Room World</h4>
                            </div>
                            <h4 className="mb-3 font-weight-bold">Change your password</h4>
                            <input onChange={this.onChangePassword} type="password"
                                   className="form-control mb-4 reset-input"
                                   placeholder="Password"
                                   required={true}
                                   autoFocus/>
                            <input onChange={this.onChangeConfirmPassword}
                                   type="password"
                                   className="form-control mb-4 reset-input"
                                   placeholder="Confirm password"
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