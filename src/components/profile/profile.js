import * as React from "react";
import UsersProfile from "./userProfile";
import ProfileMenu from "./profileMenu";
import UsersFlats from "./usersFlats";
import UsersOrders from "./userOrders";
import Account from "./account";
import Orders from "./Orders";
import {Route, Switch} from "react-router-dom";

class Profile extends React.Component {

    /*constructor(props) {
        super(props);
    }*/

    render() {
        return <div>
            <ProfileMenu/>
            <Switch>
                <Route path={'/profile/my/flats/orders'} component={Orders}/>
                <Route path={'/profile/my/flats'} component={UsersFlats}/>
                <Route path={'/profile/my/booking'} component={UsersOrders}/>
                <Route path={'/profile/account'} component={Account}/>
                <Route path={'/profile'} component={UsersProfile}/>
            </Switch>
        </div>
    }
}

export default Profile;
