import * as React from "react";
import {Link} from "react-router-dom";

class SubMenuButton extends React.Component {
    render() {
        return <Link className="text-dark" to={this.props.link}>
            <div className="submenu-button text-capitalize"
                 onClick={() => this.props.onClick(false)}
                 onClickCapture={this.props.onClickCapture}>{this.props.title}
            </div>
        </Link>
    }
}

export default SubMenuButton;