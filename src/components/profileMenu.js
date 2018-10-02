import * as React from "react";
import STORE from "../store";
import selectProfileMenu from "../actions/selectProfileMenu";
import DropDownProfileMenu from "./dropDownProfileMeny";

class ProfileMenu extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            dropDown: true
        }

        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        (!this.refs.menu.contains(event.target)) ? this.setState({dropDown: true}) : null;
    }

    render() {
        return <nav className='mb-3 border-bottom profile-menu' ref="menu">
            <img src="https://cdn2.iconfinder.com/data/icons/bold-ui/100/hamburger-512.png" className="img_size_4 position-absolute ml-5 button_cursor_pointer burger-menu-images"
                 onClick={() => this.setState({dropDown: !this.state.dropDown})}/>
            <DropDownProfileMenu hidden={this.state.dropDown} onClick={()=> this.setState({dropDown: !this.state.dropDown})}/>
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