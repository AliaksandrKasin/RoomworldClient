import * as React from "react";
import {isValidNumber} from "libphonenumber-js";

class FieldProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            invalidInput: false
        }
    }

    onBlur = event => {
        switch (this.props.type) {
            case "text" :
                (event.target.value.length < 1) ? this.setState({invalidInput: true}) : this.setState({invalidInput: false});
                break;

            case "tel" :
                (isValidNumber(event.target.value)) ? this.setState({invalidInput: true}) : this.setState({invalidInput: false});
                break;
        }
    }

    render() {
        return <div className="form-group row">
            <label htmlFor="name" className="col-3 col-form-label">{this.props.title}</label>
            <div className="col-8">
                <div className="error-message">{(this.state.invalidInput) ? this.props.errorMessage : ""}</div>
                <input className="form-control here" type={this.props.type} required="required"
                       value={this.props.input} readOnly={this.props.readonly} onChange={this.props.onChange}
                onBlur={this.onBlur}/>
            </div>
        </div>
    }
}

export default FieldProfile;