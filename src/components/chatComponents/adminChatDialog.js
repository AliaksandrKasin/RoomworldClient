import * as React from "react";
import {Link} from "react-router-dom";

class AdminChatDialog extends React.Component {

    render() {
        return <Link to={'/admin/chat'}>
            <div className="container-dialog d-flex align-items-center cursor-pointer border-bottom">
                <div>
                    <div className="d-flex ">
                        <div className="text-center ml-3">
                            <img className="img_size_5 rounded-circle"
                                 src="https://pp.userapi.com/c631925/v631925003/1aa08/aFe1PkzOKOM.jpg?ava=1"/>
                            <div className="chat-container-role">
                                {(this.props.userState) ? "Online" : "Offline"}
                            </div>
                        </div>
                        <div className="ml-4">
                            <div className="font-weight-bold">{this.props.name}</div>
                            <div className="d-flex align-items-center mt-2">
                                <img className="img_size_2 rounded-circle"
                                     src="https://pp.userapi.com/c631925/v631925003/1aa08/aFe1PkzOKOM.jpg?ava=1"/>
                                <div className="ml-2 text-muted">{this.props.message}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    }

}

export default AdminChatDialog;