import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FieldRegistration extends React.Component {
    render() {
        return <div className="mb-3">
            <small className="pl-2 text-muted">{this.props.content}</small>
            <input ref='input' className={(this.props.errorMessage) ? "form-control invalid-input" : "form-control"}
                   type={this.props.type}
                   onChange={this.props.onChange}
                   placeholder={this.props.placeholder} onBlur={this.props.onBlur}/>
            <div className="error-message">{this.props.errorMessage}</div>
        </div>
    }
}

export default FieldRegistration