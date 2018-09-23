import * as React from "react";

class FlatMenu extends React.Component {
    render() {
        return <nav>
            <a className='navbar-brand border-bottom text-info' onClick={this.props.overview}>Overview</a>
            <a className='navbar-brand border-bottom text-info' onClick={this.props.amenities}>Amenities</a>
            <a className='navbar-brand border-bottom text-info' onClick={this.props.rates}>Rates</a>
            <a className='navbar-brand border-bottom text-info' onClick={this.props.map}>Map</a>
        </nav>
    }
}

export default FlatMenu;