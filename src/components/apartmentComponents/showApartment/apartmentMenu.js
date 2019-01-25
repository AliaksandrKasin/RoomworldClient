import * as React from "react";

class ApartmentMenu extends React.Component {
    render() {
        return <nav>
            <span className='navbar-brand border-bottom text-info' onClick={this.props.overview}>Overview</span>
            <span className='navbar-brand border-bottom text-info' onClick={this.props.amenities}>Amenities</span>
            <span className='navbar-brand border-bottom text-info' onClick={this.props.rates}>Rates</span>
            <span className='navbar-brand border-bottom text-info' onClick={this.props.map}>Map</span>
        </nav>
    }
}

export default ApartmentMenu;