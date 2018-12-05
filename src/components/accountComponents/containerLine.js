import * as React from "react";

class ContainerLine extends React.Component {
    render() {
        return <div className="mr-3 ml-3 container-login-line">
            <div className="line border-right ml-2"></div>
            <div className="text-uppercase text-muted">or</div>
            <div className="line border-right ml-2"></div>
        </div>
    }
}

export default ContainerLine;