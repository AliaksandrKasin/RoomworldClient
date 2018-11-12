import * as React from "react";

class Snippet extends React.Component {
    render() {
        return <div
            className="col-xs-4 complete d-flex justify-content-end">
            <div className="position-relative d-flex align-items-center justify-content-end">
                {(this.props.position !== "start") ? <div className="progress">
                    <div className="progress-bar"></div>
                </div> : ""
                }
            </div>
            <div className="text-center step">
                <div className="d-flex justify-content-center">
                    <div onClick={() => this.props.onclick(this.props.title)}
                         className={(this.props.active === this.props.title)
                             ? "step-icon d-flex justify-content-center snippet-active" : "step-icon d-flex justify-content-center"}>
                        <i className={"p2 " + this.props.icon}></i>
                    </div>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <i className={(this.props.active === this.props.title) ? "fas fa-caret-down snippet-active" : "fas fa-caret-down icon-arrow"}></i>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="text-center step-title">{this.props.title}</div>
                </div>
            </div>
        </div>
    }
}

export default Snippet;