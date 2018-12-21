import * as React from "react";
import SubMenuButton from "./subMenuButton";
import {Link} from "react-router-dom";

class Submenu extends React.Component {

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.props.onChangeState && !this.refs.submenu.contains(event.target)) {
            this.props.onChangeState(false);
        }
    }

    render() {
        return <div ref="submenu" className="d-flex justify-content-end mr-1">
            <div className="submenu-container position-absolute">
                <div className="d-flex justify-content-center align-items-center">
                     <span
                         className="ml-2 text-lowercase submenu-username pb-2 pt-2">{localStorage.getItem("username")}</span>
                    <div className="d-flex justify-content-end">
                        <i onClick={() => this.props.onChangeState(false)}
                           className="fas fa-times text-muted submenu-close"></i>
                    </div>
                </div>
                <hr className="w-90 mt-0 mb-0"/>
                <div className="mt-2 mb-1">
                    <SubMenuButton title="Profile" link="/profile" icon="fas fa-address-card" onClick={() => this.props.onChangeState(false)}/>
                    <SubMenuButton title="My Apartment" link="/profile/my/flats" icon="fas fa-home" onClick={() => this.props.onChangeState(false)}/>
                    <SubMenuButton title="My booking" link="/profile/my/booking" icon="fas fa-calendar-alt" onClick={() => this.props.onChangeState(false)}/>
                    <SubMenuButton title="Reservation list" link="/profile/my/flats/orders" icon="far fa-calendar-alt" onClick={() => this.props.onChangeState(false)}/>
                    <SubMenuButton title="Account" link="/profile/account" icon="fas fa-unlock-alt" onClick={() => this.props.onChangeState(false)}/>
                    <SubMenuButton title="Admin" link="/admin" icon="fas fa-users-cog" onClick={() => this.props.onChangeState(false)}/>
                </div>
                <hr className="w-90 mb-0 mt-4"/>
                <div className="pt-3">
                    <SubMenuButton title="Log out" link="/login" icon="fas fa-sign-out-alt" onClick={() => this.props.onChangeState(false)}
                                   onClickCapture={() => {localStorage.removeItem('accessToken')}}/>
                </div>
            </div>
        </div>
    }
}

export default Submenu;