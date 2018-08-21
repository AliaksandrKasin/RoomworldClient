import React from "react";
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FieldRegistration extends React.Component {
    render() {
        return <div className="mb-3">
            <label htmlFor={this.props.id}>{this.props.name}</label>
            <input type={this.props.type} className="form-control" id={this.props.id}
                   placeholder={this.props.placeholder} value={this.props.value} required/>
        </div>
    }
}
export default FieldRegistration