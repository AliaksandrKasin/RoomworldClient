import * as React from "react";
import AdminChatDialog from "./adminChatDialog";
import * as signalR from "@aspnet/signalr";
import {SERVER} from "../../constants";
import axios from "axios";
import {getAllDialogs} from "../../services/chatServices/chatService";


class AdminChat extends React.Component {
    constructor(props) {
        super(props);
        this.textArea = React.createRef();
        this.state = {
            textMessage: "",
            messages: [],
            username: localStorage.getItem("username"),
            consultantIsOnline: false
        }
    }

    componentDidMount = () => {
        debugger
        getAllDialogs(0, 10)
            .then((response) => {
                this.setState({messages: response.data});
            })
            .catch((error) => {
            });

        const connection = new signalR.HubConnectionBuilder()
            .withUrl(SERVER + "/chat", {accessTokenFactory: () => localStorage.getItem("accessToken")})
            .build();
        connection.on("sendToConsultants", (text, username) => {
            let index = this.state.messages.map((x) => {
                return x.userFrom.email;
            }).indexOf(username);
            let tempArray = this.state.messages;
            if (index !== -1) {
                tempArray.splice(index, 1);
            }
            let message = {text: text, userFrom: {email: username}};
            tempArray.unshift(message);
            this.setState({messages: tempArray});
        });
        connection.start()
            .then(() => {

            })
            .catch(err => {

            });
    }

    searchDialogs = (e) => {
        let inputUsername = e.target.value;
        this.setState({
            messages: this.state.messages.filter((message) => {
                return (message.userFrom.email.slice(0, inputUsername.length).toUpperCase() === inputUsername.toUpperCase());
            })
        });
        if (inputUsername.length === 0) {
            axios.get(SERVER + '/get/dialogs/all')
                .then((response) => {
                    this.setState({messages: response.data});
                })
                .catch((error) => {

                });
        }
    }

    render() {
        return <div className="container">
            <div className="">
                <div className="position-relative w-100">
                    <i className="fas fa-search input-label"></i>
                    <input type="text" className="dialog-input-search"
                           placeholder="Search"
                           onChange={this.searchDialogs}/>
                </div>
            </div>
            <div className="admin-dialog-container container border">
                <div>
                    {
                        this.state.messages.map((message, index) => {
                            return <AdminChatDialog key={index} name={message.userFrom.email}
                                                    message={message.text}/>
                        })
                    }
                </div>
            </div>
        </div>
    }

}

export default AdminChat;