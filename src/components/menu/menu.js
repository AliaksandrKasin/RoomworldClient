import React from "react";
import Submenu from "./subMenu";
import {Link} from "react-router-dom";


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subMenuVisibility: false
        };
    }

    checkLocalStorage = () => {
        return localStorage.getItem('accessToken');
    }

    onChangeSubMenu = (state) => {
        this.setState({subMenuVisibility: state});
    }


    render() {
        return <header className="">
            <nav className='navbar border-bottom pr-0'>
                <Link className="navbar-logo" to="/">
                    <img className="img-thumbnail border-0"
                         src="https://cdn2.iconfinder.com/data/icons/real-estate-61/64/Real_estate_16-512.png"/>
                </Link>
                {
                    (this.checkLocalStorage()) &&
                    <div className="d-flex h-100">
                        <Link to={'/apartment/details'}>
                            <div className="navbar-button">
                                <i className="fas fa-home navbar-icon"></i>
                                <i className="fas fa-plus-circle navbar-icon-info"></i>
                            </div>
                        </Link>
                        <div className="navbar-button">
                            <i className="far fa-bell navbar-icon"></i>
                        </div>
                    </div>

                }
                {
                    (this.checkLocalStorage()) ?
                        <div className="d-flex align-items-center navbar-button"
                             onClick={(e) => this.setState({subMenuVisibility: true})}>
                            <i className="far fa-user navbar-icon pl-1"></i>
                            <span
                                className="ml-2 text-lowercase text-dark menu-username">{localStorage.getItem("username")}</span>
                            <i className="fas fa-angle-down arrow-down mr-2"></i>
                        </div>
                        :
                        <div className="navbar-button">
                            <a href='/registration'>
                                <div className="d-flex align-items-center navbar-button">
                                    <i className="fas fa-user-plus navbar-icon pl-1"></i>
                                </div>
                            </a>
                        </div>

                }

                {
                    (!this.checkLocalStorage()) &&
                    <div className="navbar-button">
                        <a href="/login" className="d-flex align-items-center navbar-button">
                            <i className="fas fa-sign-in-alt navbar-icon cursor-pointer"></i>
                        </a>
                    </div>
                }
            </nav>
            {(this.state.subMenuVisibility) && <Submenu onChangeState={this.onChangeSubMenu}/>}
        </header>
    }
}

export default Menu