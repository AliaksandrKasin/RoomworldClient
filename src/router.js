import * as React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/accountComponents/login";
import Profile from "./components/profile/profile"
import AlbomCardFlat from "./components/albomCardFlat"
import Flat from "./components/flat"
import RegistrationFlat from "./components/registrationFlat"
import ResetPassword from "./components/accountComponents/resetPassword"
import ChangePasswordByToken from "./components/accountComponents/changePasswordByToken"
import RegistrationApartment from "./components/apartmentComponents/registrationApartment"
import NotFound from "./components/notFound"
import AdminGeneral from "./components/admin/adminGeneral";
import RegistrationUser from "./components/accountComponents/registrationUser";
import ServerError from "./components/extensionComponents/serverError";

class Router extends React.Component {
    render() {
        return <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/searches' component={AlbomCardFlat}/>
            <Route path='/flat' component={Flat}/>
            <Route path={'/registration'} component={RegistrationUser}/>
            <Route path={'/places/new'} component={RegistrationFlat}/>
            <Route path={'/password/reset'} component={ResetPassword}/>
            <Route path={'/change/password/:token'} component={ChangePasswordByToken}/>

            <Route path={'/profile'} component={Profile}/>
            <Route path={'/admin'} component={AdminGeneral}/>

            <Route path={'/apartment'} component={RegistrationApartment}/>
            <Route path={'/error'} component={ServerError}/>
            <Route path='*' component={NotFound}/>}
        </Switch>
    }
}

export default Router;