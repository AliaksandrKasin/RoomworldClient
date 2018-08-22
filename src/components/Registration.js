import React from "react";
import FieldRegistration from './FieldRegistration'
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Registration extends React.Component {
    render() {
        return <div className='container'>
            <form>
                <FieldRegistration name='First name' type='text' id='first-name'/>
                <FieldRegistration name='Last name' type='text' id='last-name'/>
                <FieldRegistration name='Number phone' type='tel' id='number-phone' placeholder='+375(33) 111-11-11'/>
                <FieldRegistration name='Email' type='email' id='email' placeholder='name@example.com'/>
                <FieldRegistration name='Password' type='password' id='password'/>
                <FieldRegistration name='Confirm password' type='password' id='confirm-password'/>
                <div className='mb-3 text-center'>
                    <button className="btn btn-lg btn-primary" type="submit">Create account</button>
                </div>
            </form>
        </div>
    }
}
export default Registration