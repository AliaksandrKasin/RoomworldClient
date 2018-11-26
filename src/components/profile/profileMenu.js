import * as React from "react";
import {Link} from "react-router-dom";

class ProfileMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <nav className='mb-3 border-bottom profile-menu'>
            <div className="mb-1 ml-5">
                <Link to='/profile/my/flats/orders'
                      className={(document.location.pathname === '/profile/my/flats/orders')
                          ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Orders</Link>
                <Link to='/profile/my/flats' className={(document.location.pathname === '/profile/my/flats')
                    ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>My
                    flats</Link>
                <Link to='/profile/my/booking'
                      className={(document.location.pathname === '/profile/my/booking')
                          ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>My
                    booking</Link>
                <Link to='/profile'
                      className={(document.location.pathname === '/profile')
                          ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Profile</Link>
                <Link to='/profile/account'
                      className={(document.location.pathname === '/profile/account')
                          ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Account</Link>
            </div>
        </nav>

    }
}

export default ProfileMenu;