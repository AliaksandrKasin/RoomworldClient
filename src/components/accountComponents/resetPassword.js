import * as React from "react";
import axios from "axios";
import {SERVER} from "../../constants/constants";
import AlertInfo from "../alertComponents/alertInfo";
import * as EmailValidator from 'email-validator';


class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            alertType: "",
            alertMessage: ""
        }
    }


    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onClickButtonClose = () => {
        this.setState({
            alertType: "",
            alertMessage: ""
        });
    }

    resetPassword = () => {
        if(!EmailValidator.validate(this.state.email)){
            this.setState({
                alertType: "error",
                alertMessage: "Invalid email address, check email again."
            });
            return;
        }
        axios.put(SERVER + '/password/reset/' + this.state.email)
            .then((response) => {
                this.setState({
                    alertType: "success",
                    alertMessage: "Message for reset password sent to the email " + this.state.email + ", check your email."
                });
            })
            .catch((error) => {
                this.setState({
                    alertType: "error",
                    alertMessage: "Email address " + this.state.email + " does not exist."
                });
            });
    }

    render() {
        return <div className='d-flex align-items-center justify-content-center container-fluid container-login'>
            <form className="form-signin text-center">
                <h1 className="h3 mb-3 font-weight-normal">Forgot password?</h1>
                {
                    (this.state.alertMessage) ?
                        <AlertInfo onclickButtonClose={this.onClickButtonClose} message={this.state.alertMessage} type={this.state.alertType}/> : null
                }
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.handleEmailChange} className="form-control mb-3" placeholder="Email address"
                       autoFocus/>
                <button disabled={this.state.alertType === "success"} onClick={this.resetPassword} className="btn btn-lg btn-primary" type='button'>Reset password
                </button>
            </form>
        </div>
    }
}

export default ResetPassword;
