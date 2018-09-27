import * as React from "react";

class LocationFieldText extends React.Component {
    render() {
        return <div className="text-left mb-4 w-100 mt-3">
            <label className="text-muted">{this.props.title}</label><br/>
            <input className="rounded w-75 " type="text" onChange={this.props.onChange}/>
        </div>
    }
}

export default LocationFieldText;