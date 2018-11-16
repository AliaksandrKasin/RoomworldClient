import React from "react";
import Submenu from "./subMenu";


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
        return <header>
            <nav className='navbar border-bottom pr-0'>
                <a className="navbar-logo" href="/">
                    <img className="img-thumbnail border-0"
                         src="https://cdn2.iconfinder.com/data/icons/real-estate-61/64/Real_estate_16-512.png"/>
                </a>

                {
                    (this.checkLocalStorage()) &&
                    <div className="d-flex">
                        <div className="navbar-button">
                            <i className="fas fa-home navbar-icon"></i>
                            <i className="fas fa-plus-circle navbar-icon-info"></i>
                        </div>
                        <div className="navbar-button">
                            <i className="far fa-bell navbar-icon"></i>
                        </div>
                    </div>
                }

                {
                    (this.checkLocalStorage()) ?
                        <div className="d-flex align-items-center navbar-button"
                             onClick={() => this.setState({subMenuVisibility: !this.state.subMenuVisibility})}>
                            <i className="far fa-user navbar-icon pl-1"></i>
                            <span
                                className="ml-2 text-lowercase text-dark menu-username">{localStorage.getItem("username")}</span>
                            <i className="fas fa-angle-down arrow-down"></i>
                        </div>
                        :
                        <a href='/registration'>
                            <div className="d-flex align-items-center navbar-button">
                                <i className="fas fa-user-plus navbar-icon pl-1"></i>
                            </div>
                        </a>
                }

                {
                    (this.checkLocalStorage()) ?
                        <a href="/login" className="navbar-button" onClick={() => {
                            localStorage.removeItem('accessToken')
                        }}>
                            <i className="fas fa-sign-out-alt navbar-icon cursor-pointer"></i>
                        </a> :
                        <a href="/login" className="d-flex align-items-center navbar-button">
                            <i className="fas fa-sign-in-alt navbar-icon cursor-pointer"></i>
                        </a>
                }
            </nav>
            {(this.state.subMenuVisibility) && <Submenu onChangeState={this.onChangeSubMenu}/>}
        </header>
    }
}

export default Menu