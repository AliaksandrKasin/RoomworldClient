import * as React from "react";
import {Link} from "react-router-dom";


class AdminGeneral extends React.Component {
    render() {
        return <div className="">
            <nav className='mb-3 border-bottom profile-menu'>
                <div className="mb-1 ml-5">
                    <Link to='/profile/my/flats/orders'
                          className={(document.location.pathname === '/profile/my/flats/orders')
                              ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Statistics</Link>
                    <Link to='/profile/my/flats/orders'
                          className={(document.location.pathname === '/profile/my/flats/orders')
                              ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Users</Link>
                    <Link to='/profile/my/flats' className={(document.location.pathname === '/profile/my/flats')
                        ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Types of housing</Link>
                    <Link to='/profile/my/booking'
                          className={(document.location.pathname === '/profile/my/booking')
                              ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Feedbacks</Link>
                </div>
            </nav>
        </div>
    }
}

export default AdminGeneral;