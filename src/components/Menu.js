import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginState: this.loginState(),
            singUpHidden: this.checkLocalStorage(),
            profileHidden: this.checkLocalStorage()
        };
    }

    loginState() {
        return localStorage.getItem('accessToken') ? 'Sing out' : 'Sing in';
    }

    checkLocalStorage() {
        return !!localStorage.getItem('accessToken');
    }

    render() {
        return <div>
            <a href="/home"><img src="https://cdn2.iconfinder.com/data/icons/real-estate-61/64/Real_estate_16-512.png"
                                 className="img-thumbnail icon" width="50px" height="50px"/></a>
            <nav className='navbar border-bottom bo'>
                <a href="/profile" hidden={!this.state.profileHidden}><img
                    src="https://cdn2.iconfinder.com/data/icons/real-estate-185/64/broker-agent-agency-business_man-512.png"
                    width="50px" height="50px" className="img-thumbnail navbar-brand profile-icon"/></a>
                <a className='navbar-brand' hidden={this.state.singUpHidden} href='/registration'>Sing Up</a>
                <a className='navbar-brand' onClick={() => {
                    localStorage.removeItem('accessToken')
                }} href='/login'>{this.state.loginState}</a>
            </nav>
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path={'/registration'} component={Registration}/>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default Menu