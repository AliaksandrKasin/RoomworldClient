import * as React from "react";
import {Link} from "react-router-dom";

class NavigationPanel extends React.Component {
    render() {
        return <div className="container-navigation border-bottom text-center d-flex align-items-center justify-content-center">
            <Link to="password/reset">
                <span className="small text-muted text-uppercase link mr-1">home</span>
            </Link>
            <span>/</span>
            <Link to="password/reset">
                <span className="small text-muted text-uppercase link ml-1">login</span>
            </Link>
        </div>
    }
}

export default NavigationPanel;