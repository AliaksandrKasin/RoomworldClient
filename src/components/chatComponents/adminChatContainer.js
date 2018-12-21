import * as React from "react";
import {getMessagesByEmail} from "../../services/chatService";
import AdminChatMessage from "./adminChatMessage";
import {Link} from "react-router-dom";

class AdminChatContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: getMessagesByEmail()
        }
    }


    render() {
        return <div className="container border p-0">
            <div className="admin-chat-header border-bottom d-flex align-items-center">
                <div className="d-flex text-muted align-items-center h-100 ">
                    <Link className="h-100" to={'/admin/consult'}>
                        <div className="chat-back">
                            <i className="fas fa-chevron-left chat-back-icon"></i>
                            <span className="ml-2">Back</span>
                        </div>
                    </Link>
                </div>
                <div className="row m-0">
                    <div className="w-100 d-flex justify-content-center col-sm">
                        <div className="text-center">
                            <h6 className="font-weight-bold m-0">Alexandr Kasin</h6>
                            <small className="text-muted">Online</small>
                        </div>
                    </div>
                    <div className="mr-2 col-sm-1">
                        <img className="img_size_4 rounded-circle cursor-pointer"
                             src="https://pp.userapi.com/c631925/v631925003/1aa08/aFe1PkzOKOM.jpg?ava=1"/>
                    </div>
                </div>
            </div>
            <div className="admin-chat-container">
                {
                    this.state.messages.map((message, index) => {
                        return <AdminChatMessage key={index} name={message.username}
                                                 message={message.text}/>
                    })
                }
            </div>
            <div className="admin-chat-footer row m-0">
                <div className="col-sm d-flex align-items-center">
                    <textarea className="admin-chat-input" placeholder="Type message"/>
                </div>
                <div className="d-flex justify-content-end align-items-center pr-3 col-sm-1">
                    <img className="chat-button-send"
                         src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/send-128.png"/>
                </div>
            </div>
        </div>
    }
}

export default AdminChatContainer;