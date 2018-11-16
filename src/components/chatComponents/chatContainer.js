import * as React from "react";
import STORE from "../../store";
import {chatState} from "../../actions/chatActions/chatActions";
import connect from "react-redux/es/connect/connect";
import ChatMessage from "./chatMessage";
import * as signalR from "@aspnet/signalr";
import {SERVER} from "../../constants/constants";


class ChatContainer extends React.Component {

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
        this.state = {
            hubConnection: null,
            textMessage: "",
            messages: [],
            username: localStorage.getItem("username")
        }
    }

    componentDidMount = () => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(SERVER + "/chat", {accessTokenFactory: () => localStorage.getItem("accessToken"),})
            .build();


        connection.on("send", (text, username) => {
            this.setState({messages: [...this.state.messages, {text, username}]});
        });
        connection.start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection :('));

        this.setState({hubConnection: connection});

    }

    sendMessage = () => {
        if (this.state.textMessage) {
            this.state.hubConnection
                .invoke('send', this.state.textMessage, this.state.username)
                .catch(err => console.error(err));
            this.setState({textMessage: ""});
        }
        this.textArea.current.focus();
    };

    onChangeMessage = (e) => {
        this.setState({textMessage: e.target.value});
    }

    onKeyEnter = (e) => {
        if (e.ctrlKey) {
            this.sendMessage();
        }
    }

    render() {
        return (this.props.chatIsOpen) && <div className="bottom-right d-flex justify-content-end mb-3 mr-3">
            <div className="chat-container rounded_10">
                <div className="border text-right bg-white chat-container-top">
                    <span className="h6 text-muted mr-5 pt-5">Chat with us!</span>
                    <img onClick={() => STORE.dispatch(chatState(false))}
                         className="img_size_2 mb-1 mr-2 mt-2 ml-4 cursor-pointer"
                         src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/down3-128.png"/>
                </div>
                <div className="border chat-container-content">
                    {
                        this.state.messages.map((message, index) => {
                            return <ChatMessage key={index} isSender={true} username={message.username}
                                                message={message.text}/>
                        })
                    }
                </div>
                <div className="chat-container-bottom bg-white rounded_10">
                    <textarea ref={this.textArea} onKeyPress={this.onKeyEnter} onChange={this.onChangeMessage}
                              value={this.state.textMessage}
                              className="chat-container-input ml-2 text-muted"
                              placeholder="Type your message and press Ctrl + Enter to send."/>
                    <img onClick={this.sendMessage} className="chat-button-send cursor-pointer"
                         src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/send-128.png"/>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        chatIsOpen: state.chatReducer.chat.isOpen,
    };
}

export default connect(mapStateToProps)(ChatContainer);
