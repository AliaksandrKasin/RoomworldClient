import * as React from "react";

class FlatMenu extends React.Component {
    render() {
        return <nav>
            <a className='navbar-brand border-bottom text-info' href=''>Overview</a>
            <a className='navbar-brand border-bottom text-info' href=''>Amenities</a>
            <a className='navbar-brand border-bottom text-info' href=''>Rates & Availability</a>
        </nav>
    }
}

export default FlatMenu;