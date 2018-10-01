import * as React from "react";
import STORE from "../store";
import selectProfileMenu from "../actions/selectProfileMenu";

class ProfileMenu extends React.Component {
    render() {
        return <nav className='mb-3 border-bottom profile-menu'>
            <div className="mb-1 ml-5">
                <a className='navbar-brand profile-menu__link text-muted ml-5 button_cursor_pointer' onClick={()=> STORE.dispatch(selectProfileMenu("Inbox"))} >Inbox</a>
                <a className='navbar-brand profile-menu__link text-muted ml-5 button_cursor_pointer' onClick={()=> STORE.dispatch(selectProfileMenu("My flats"))}>My flats</a>
                <a className='navbar-brand profile-menu__link text-muted ml-5 button_cursor_pointer' onClick={()=> STORE.dispatch(selectProfileMenu("My booking"))}>My booking</a>
                <a className='navbar-brand profile-menu__link text-muted ml-5 button_cursor_pointer' onClick={()=> STORE.dispatch(selectProfileMenu("Profile"))}>Profile</a>
                <a className='navbar-brand profile-menu__link text-muted ml-5 button_cursor_pointer' onClick={()=> STORE.dispatch(selectProfileMenu("Account"))}>Account</a>
            </div>
        </nav>
    }
}

export default ProfileMenu;