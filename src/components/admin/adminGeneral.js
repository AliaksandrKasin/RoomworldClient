import * as React from "react";
import {Link, Route} from "react-router-dom";
import AdminMenu from "./adminMenu";
import Switch from "react-router-dom/es/Switch";
import AdminChat from "../chatComponents/adminChat";
import AdminChatContainer from "../chatComponents/adminChatContainer";


class AdminGeneral extends React.Component {
    render() {
        return <div>
            <AdminMenu/>
            <Switch>
                <Route path={'/admin/consult'} component={AdminChat}/>
                <Route path={'/admin/chat'} component={AdminChatContainer}/>
            </Switch>
        </div>
    }
}

export default AdminGeneral;