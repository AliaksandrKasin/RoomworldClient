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
            singUpHidden: this.checkLocalStorage()
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
            <nav className='navbar'>
                <a className='navbar-brand' href='/support'>Support</a>
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