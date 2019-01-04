import * as React from "react";

class AlertSuccess extends React.Component {
    render() {
        return (this.props.message) && <div className="alert-container d-flex align-items-center alert-container-success">
            <i className="far fa-thumbs-up alert-error-icon text-success"></i>
            <span className="alert-error-message text-success">{this.props.message}</span>
        </div>
    }
}

export default AlertSuccess;