import * as React from "react";

class ProfileMenu extends React.Component {
    render() {
        return <nav className='mb-3 border-bottom profile-menu'>
            <div className="mb-1 ml-5">
                <a className='navbar-brand profile-menu__link text-muted ml-5' href=''>Inbox</a>
                <a className='navbar-brand profile-menu__link text-muted ml-5' href=''>Activity</a>
                <a className='navbar-brand profile-menu__link text-muted ml-5' href=''>Profile</a>
                <a className='navbar-brand profile-menu__link text-muted ml-5' href=''>Account</a>
            </div>
        </nav>
    }
}

export default ProfileMenu;