import React from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    signIn() {
        console.log(this.state.email);
        console.log(this.state.password);

        axios.post('https://localhost:5001/token', {
                email: "sdfsdfsdfs",
                password: "sdfsdfsdfs"
            },{headers : {"Content-Type" : "application/x-www-form-urlencoded"}}
        )
            .then(function (response) {

                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    render() {
        return <div className='container-fluid'>
            <form className="form-signin text-center">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" onChange={this.handleEmailChange} className="form-control"
                       placeholder="Email address" required
                       autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" onChange={this.handlePasswordChange} className="form-control"
                       placeholder="Password" required/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button onClick={this.signIn} className="btn btn-lg btn-primary btn-block" type="submit">Sign in
                </button>
            </form>
        </div>
    }
}

export default Login