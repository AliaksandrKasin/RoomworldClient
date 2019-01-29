import * as React from "react";
import UsersProfile from "./userProfile";
import ProfileMenu from "./profileMenu";
import UsersApartment from "./usersApartment";
import UsersOrders from "./usersReservations";
import Account from "./account";
import ApartmentsReservations from "./apartmentsReservations";
import {Route, Switch} from "react-router-dom";

class Profile extends React.Component {

    /*constructor(props) {
        super(props);
    }*/

    render() {
        return <div>
            <ProfileMenu/>
            <Switch>
                <Route path={'/profile/my/flats/orders'} component={ApartmentsReservations}/>
                <Route path={'/profile/my/flats'} component={UsersApartment}/>
                <Route path={'/profile/my/booking'} component={UsersOrders}/>
                <Route path={'/profile/account'} component={Account}/>
                <Route path={'/profile'} component={UsersProfile}/>
            </Switch>
        </div>
    }
}

export default Profile;
