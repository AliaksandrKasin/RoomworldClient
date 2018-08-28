import React from "react";

class ErrorMessage extends React.Component {
    render() {
        if (this.props.state) {
            return <div className='error-message'>
                {this.props.content}
            </div>
        }
        else {
            return <div></div>
        }
    }
}

export default ErrorMessage