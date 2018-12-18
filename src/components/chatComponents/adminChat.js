import * as React from "react";
import AdminChatDialog from "./adminChatDialog";
import * as signalR from "@aspnet/signalr";
import {SERVER} from "../../constants/constants";


class AdminChat extends React.Component {
    constructor(props) {
        super(props);
        this.textArea = React.createRef();
        this.state = {
            hubConnection: null,
            textMessage: "",
            messages: [],
            username: localStorage.getItem("username"),
            consultantIsOnline: false
        }
    }

    componentDidMount = () => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(SERVER + "/chat", {accessTokenFactory: () => localStorage.getItem("accessToken")})
            .build();

        connection.on("sendToConsultants", (text, username) => {
            debugger
            this.setState({
                //if user exists in chat, find and change message
                messages: [...this.state.messages, {text, username}]
            });
        });

        connection.on("SwichConsultant", (state) => {
            this.setState({
                consultantIsOnline: state,
            });

            if (state && !this.state.messages.length) {
                this.setState({
                    messages: [...this.state.messages, {
                        text: "Hello, how can I help you?",
                        username: "Consultant"
                    }]
                })
            }
        });
        connection.start()
            .then(() => {

            })
            .catch(err => {

            });

        this.setState({hubConnection: connection});
    }
    render() {
        return <div className="admin-chat-container container border">
            <AdminChatDialog name="Alexandr Kasin" userState={true} message="Hello sfdgsdfgsd fgsdfgsdf gsdfg sdfg sdfg sdfgs dfgs d"/>
            {
                this.state.messages.map((message, index) => {
                    return <AdminChatDialog key={index} name={message.username}
                                        message={message.text}/>
                })
            }
        </div>
    }

}

export default AdminChat;