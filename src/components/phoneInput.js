import * as React from "react";
import ReactPhoneInput from "react-phone-input-2";
import {isValidNumber} from "libphonenumber-js";

class PhoneInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            invalidInput: false
        }
    }

    onBlur = event => {
        (!isValidNumber(event.target.value)) ? this.setState({invalidInput: true}) : this.setState({invalidInput: false});
    }

    render() {
        return <div className="form-group row">
            <label htmlFor="name" className="col-3 col-form-label">{this.props.title}</label>
            <div className="col-8">
                <div className="error-message">{(this.state.invalidInput) ? this.props.errorMessage : ""}</div>
                <ReactPhoneInput defaultCountry="by" value={this.props.numberPhone} inputClass="w-100"
                                 onChange={this.props.onChange} required={true} onBlur={this.onBlur}/>
            </div>
        </div>
    }
}

export default PhoneInput;