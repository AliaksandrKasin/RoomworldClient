import * as React from "react";

class LocationFieldNumber extends React.Component {
    render() {
        return <div className="text-left mb-4 w-100 mt-3 col-4">
            <label className="text-muted">{this.props.title}</label><br/>
            <input className="rounded w-50" type="number" min="1"
                   onChange={this.props.onChange}/>
        </div>
    }
}

export default LocationFieldNumber;