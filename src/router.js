import * as React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/accountComponents/login";
import Profile from "./components/profile/profile"
import ResetPassword from "./components/accountComponents/resetPassword"
import ChangePasswordByToken from "./components/accountComponents/changePasswordByToken"
import PageNotFound from "./components/pageNotFound"
import AdminGeneral from "./components/admin/adminGeneral";
import RegistrationUser from "./components/accountComponents/registrationUser";
import ServerError from "./components/extensionComponents/serverError";
import ApartmentMain from "./components/apartmentComponents/createApartment/apartmentMain";
import ShowApartment from "./components/apartmentComponents/showApartment/showApartment";
import CollectionCardApartment from "./components/apartmentComponents/collectionApartment/collectionCardApartment";
import {withRouter} from 'react-router-dom'
import OpenStreetMap from "./components/apartmentComponents/showApartment/openStreetMap";
import Geocode from "react-geocode";
import axios from "axios";

class Router extends React.Component {

    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY&language=en");
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
    }

    componentDidUpdate = () => {
        window.scrollTo(0, 0);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY&language=en");
    }

    render() {
        return <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/search/apartment' component={CollectionCardApartment}/>
            <Route path='/vacation-rental' component={ShowApartment}/>
            <Route path={'/registration'} component={RegistrationUser}/>
            <Route path={'/open-street-map'} component={OpenStreetMap}/>

            <Route path={'/password/reset'} component={ResetPassword}/>
            <Route path={'/change/password/:token'} component={ChangePasswordByToken}/>
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/admin'} component={AdminGeneral}/>
            <Route path={'/apartment'} component={ApartmentMain}/>
            <Route path={'/error'} component={ServerError}/>
            <Route path='*' component={PageNotFound}/>}
        </Switch>
    }
}

export default withRouter(Router);