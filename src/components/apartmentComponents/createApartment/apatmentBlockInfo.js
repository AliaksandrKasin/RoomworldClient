import * as React from "react";

class ApartmentBlockInfo extends React.Component {
    render() {
        return <div className="col-sm-3 d-flex justify-content-center mb-5 p-3 ml-4">
            <div>
                <i className={this.props.icon +" apartment-welcome-icon"}></i>
            </div>
            <div>
                <h5>{this.props.title}</h5>
                <div>
                    <span>{this.props.text}</span>
                </div>
            </div>
        </div>
    }
}

export default ApartmentBlockInfo;