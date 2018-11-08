import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Registration from "./registration";
import Profile from "./profile";
import AlbomCardFlat from "./albomCardFlat";
import Flat from "./flat";
import RegistrationFlat from "./registrationFlat";
import ResetPassword from "./accountComponents/resetPassword";
import ChangePasswordByToken from "./accountComponents/changePasswordByToken";
import NavigationPanel from "./navigation/navigationPanel";
import Counter from "./registerFlatComponents/counter";
import CounterAmenity from "./registerFlatComponents/counterAmenity";
import FlatDetails from "./registerFlatComponents/flatDetails";

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
                <a className='navbar-brand text-uppercase' href='/places/new'>List your place</a>
                <a href="/profile" hidden={!this.state.profileHidden}>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/real-estate-185/64/broker-agent-agency-business_man-512.png"
                        width="45px" height="45px" className="img-thumbnail navbar-brand profile-icon"/>
                </a>
                <a className='navbar-brand text-uppercase' hidden={this.state.singUpHidden} href='/registration'>Sign Up</a>
                <a className='navbar-brand text-uppercase' onClick={() => {
                    localStorage.removeItem('accessToken')
                }} href='/login'>{this.state.loginState}</a>
            </nav>
            {/*<NavigationPanel/>*/}
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/searches' component={AlbomCardFlat}/>
                        <Route path='/flat' component={Flat}/>
                        <Route path={'/registration'} component={Registration}/>
                        <Route path={'/places/new'} component={RegistrationFlat}/>
                        <Route path={'/password/reset'} component={ResetPassword}/>
                        <Route path={'/change/password/:token'} component={ChangePasswordByToken}/>

                        <Route path={'/counter'} component={CounterAmenity}/>
                        <Route path={'/details'} component={FlatDetails}/>
                    </Switch>
                </BrowserRouter>

        </div>
    }
}

export default Menu