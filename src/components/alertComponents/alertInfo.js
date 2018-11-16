import * as React from "react";

class AlertInfo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div className={(this.props.type === "success") ? "alert-success" :
                (this.props.type === "error") ? "alert-danger" : (this.props.type === "warning") ? "alert-warning" :
                    (this.props.type === "info") ? "alert-info" : ""}>
            <div className="mb-2 text-right">
                <button onClick={this.props.onclickButtonClose} className="alert-btn cursor-pointer h5 mr-1" type="button">x</button>
                <h5 className="text-left ml-4 ">{(this.props.type === "success") ? "Successful." :
                    (this.props.type === "error") ? "Error." : (this.props.type === "warning") ? "Warning." :
                        (this.props.type === "info") ? "Info." : ""}</h5>
                <p className="text-left ml-4 pb-3 pr-3">{this.props.message}</p>
            </div>
        </div>
    }
}

export default AlertInfo;