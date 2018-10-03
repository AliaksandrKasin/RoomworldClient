import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FieldRegistration extends React.Component {
    render() {
        return <div className="mb-3">
            <label>{this.props.content}</label>
            <div className="error-message">{this.props.errorMessage}</div>
            <input ref='input' className={(this.props.errorMessage) ? "form-control border-danger" : "form-control"}
                   type={this.props.type}
                   onChange={this.props.onChange}
                   placeholder={this.props.placeholder} onBlur={this.props.onBlur}/>
        </div>
    }
}

export default FieldRegistration