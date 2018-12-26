import * as React from "react";

class AlertError extends React.Component {
    render() {
        return (this.props.message) && <div className="alert-container d-flex align-items-center">
            <i className="fas fa-exclamation-triangle alert-error-icon"></i>
            <span className="alert-error-message">{this.props.message}</span>
        </div>
    }
}

export default AlertError;