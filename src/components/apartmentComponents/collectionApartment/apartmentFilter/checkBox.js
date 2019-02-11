import * as React from "react";

class CheckBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked || false
        }
    }

    render() {
        return <div className="d-flex align-items-center">
            <div className={(this.state.checked) ? "checkbox border checkbox-blue" : "checkbox border"}
                 onClick={() => this.setState({checked: !this.state.checked})}
                 onClickCapture={() => this.props.onClick(!this.state.checked, this.props.title)}>
                {(this.state.checked) && <i className="fas fa-check check"></i>}
            </div>
            <span className="ml-3">{this.props.title}</span>
        </div>
    }
}

export default CheckBox;