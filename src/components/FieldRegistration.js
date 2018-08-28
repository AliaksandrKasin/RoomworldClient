import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FieldRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.validateInput = this.validateInput.bind(this);

        this.state = {
            inputValid: 0,
            errorMessage: '',
            colorInputBorder: '',
        }
    }

    validateEmail(email) {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }

    validateInput() {
        let value = this.refs.input.value;
        if (this.props.required && value === '') {
            this.setState({errorMessage: 'This field required.', colorInputBorder: 'red'});
        } else if (!this.validateEmail(value) && this.props.type === 'email') {
            this.setState({errorMessage: 'Incorrect email address.', colorInputBorder: 'red'});
        } else {
            this.setState({inputValid: true});
        }


    }

    onChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return <div className="mb-3">
            <label htmlFor={this.props.id}>{this.props.content}</label>
            <div class="error-message">{this.state.errorMessage}</div>
            <input ref='input' type={this.props.type} className="form-control" id={this.props.id}
                   onChange={this.props.onChange} onBlur={this.validateInput}
                   placeholder={this.props.placeholder} value={this.props.value}
                   style={{borderColor: this.state.colorInputBorder}}/>
        </div>
    }
}

export default FieldRegistration