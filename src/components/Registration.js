import React from "react";
import FieldRegistration from './FieldRegistration'
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            name:'',
            email:'',
            password:''
        };
    }
    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    signUp(){
        axios.post('/signup', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return <div className='container-fluid'>
            <form>
                <FieldRegistration name='First name' type='text' id='first-name'/>
                <FieldRegistration name='Last name' type='text' id='last-name'/>
                <FieldRegistration name='Number phone' type='tel' id='number-phone' placeholder='+375(33) 111-11-11'/>
                <FieldRegistration name='Email' type='email' id='email' placeholder='name@example.com'/>
                <FieldRegistration name='Password' type='password' id='password'/>
                <FieldRegistration name='Confirm password' type='password' id='confirm-password'/>
                <div className='mb-3 text-center'>
                    <button onClick={this.signUp} className="btn btn-lg btn-primary" type="submit">Create account</button>
                </div>
            </form>
        </div>
    }
}
export default Registration