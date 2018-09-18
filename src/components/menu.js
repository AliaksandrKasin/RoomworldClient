import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Registration from "./registration";
import Profile from "./profile";
import AlbomCardFlat from "./albomCardFlat";
import Flat from "./flat";
import {Provider} from 'react-redux';
import STORE from "../store";

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
        return localStorage.getItem('accessToken') ? 'Sign out' : 'Sign in';
    }

    checkLocalStorage() {
        return !!localStorage.getItem('accessToken');
    }

    render() {
        return <div>
            <a href="/home"><img src="https://cdn2.iconfinder.com/data/icons/real-estate-61/64/Real_estate_16-512.png"
                                 className="img-thumbnail icon-home" width="50px" height="50px"/></a>
            <nav className='navbar border-bottom'>
                <a className='navbar-brand ' href='/rent'>List your place</a>
                <a href="/profile" hidden={!this.state.profileHidden}>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/real-estate-185/64/broker-agent-agency-business_man-512.png"
                        width="45px" height="45px" className="img-thumbnail navbar-brand profile-icon"/>
                </a>
                <a className='navbar-brand' hidden={this.state.singUpHidden} href='/registration'>Sign Up</a>
                <a className='navbar-brand' onClick={() => {
                    localStorage.removeItem('accessToken')
                }} href='/login'>{this.state.loginState}</a>
            </nav>
            <Provider store={STORE}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/searches' component={AlbomCardFlat}/>
                        <Route path='/flat' component={Flat}/>
                        <Route path={'/registration'} component={Registration}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    }
}

export default Menu