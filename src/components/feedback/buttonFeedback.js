import * as React from "react";

class ButtonFeedback extends React.Component {
    render() {
        return <div className="position-fixed btn-feedback d-flex justify-content-center align-items-center"
                    onClick={this.props.onClick}>
            <span>Feedback</span>
        </div>
    }
}

export default ButtonFeedback;