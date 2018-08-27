import React from "react";

class ErrorMessage extends React.Component {
    render() {
        if (this.props.state) {
            return <div className='error-message'>
                <strong>Error!</strong> Incorrect Email or password.
            </div>
        }
        else {
            return <div></div>
        }
    }
}

export default ErrorMessage