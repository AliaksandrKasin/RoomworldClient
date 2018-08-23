import React from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'adfasd',
            password: 'asdfasdf'
        };
    }

    render() {
        return <div className='container-fluid'>
            <form className="form-signin text-center">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control"
                       placeholder="Email address" required
                       autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control"
                       placeholder="Password" required/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button onClick={this.signIn} className="btn btn-lg btn-primary btn-block">Sign in
                </button>
            </form>
        </div>
    }


    signIn() {
        alert("asf");
        axios.post('https://localhost:5001/token', {
            email: 'sdgfs@sd',
            password: 'sdfsdsdf'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default Login