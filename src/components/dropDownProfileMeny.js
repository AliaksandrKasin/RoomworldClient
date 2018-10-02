import * as React from "react";
import STORE from "../store";
import selectProfileMenu from "../actions/selectProfileMenu";

class DropDownProfileMenu extends React.Component {
    render() {
        return <nav className="ml-5 position-absolute profile-burger-menu border" hidden={this.props.hidden}>
            <li className='text-muted ml-5 button_cursor_pointer mb-2' onClick={() => {
                this.props.onClick();
                STORE.dispatch(selectProfileMenu("Inbox"));
            }}>Inbox
            </li>
            <li className='text-muted ml-5 button_cursor_pointer mb-2'
                onClick={() => {
                    this.props.onClick();
                    STORE.dispatch(selectProfileMenu("My flats"))
                }}>My flats
            </li>
            <li className='text-muted ml-5 button_cursor_pointer mb-2'
                onClick={() => {
                    this.props.onClick();
                    STORE.dispatch(selectProfileMenu("My booking"))
                }}>My booking
            </li>
            <li className='text-muted ml-5 button_cursor_pointer mb-2'
                onClick={() => {
                    this.props.onClick();
                    STORE.dispatch(selectProfileMenu("Profile"))
                }}>Profile
            </li>
            <li className='text-muted ml-5 button_cursor_pointer mb-2'
                onClick={() => {
                    this.props.onClick();
                    STORE.dispatch(selectProfileMenu("Account"))
                }}>Account
            </li>
        </nav>
    }

}

export default DropDownProfileMenu;