import * as React from "react";

class Location extends React.Component {
    render() {
        return <div className="mt-2 text-right">
            <img className="img_size_2 mr-1"
                 src="https://cdn4.iconfinder.com/data/icons/mayssam/512/location-512.png"/>
            <a className="text-muted">{this.props.place}</a>
        </div>
    }
}

export default Location;