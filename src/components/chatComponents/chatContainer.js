import * as React from "react";
import STORE from "../../store";
import {chatState} from "../../actions/chatActions/chatActions";
import connect from "react-redux/es/connect/connect";
import ChatMessage from "./chatMessage";
import * as signalR from "@aspnet/signalr";
import {SERVER} from "../../constants/constants";
import Validation from "../../extends/validation";


class ChatContainer extends React.Component {

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
        this.state = {
            hubConnection: null,
            textMessage: "",
            messages: [],
            username: localStorage.getItem("username"),
            consultant: {
                id: "",
                name: "",
                email: ""
            }
        }
    }

    componentDidMount = () => {
        console.log(localStorage.getItem("accessToken"));
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(SERVER + "/chat", {accessTokenFactory: () => localStorage.getItem("accessToken")})
            .build();

        connection.on("send", (text, username) => {
            this.setState({
                messages: [...this.state.messages, {text, username}]
            });
        });
        connection.on("SwichConsultant", (idConsultant, nameConsultant, emailConsultant) => {

            this.setState({
                consultant: {id: idConsultant, name: nameConsultant, email: emailConsultant},
            });

            if (idConsultant && this.state.messages.length === 0) {
                this.setState({
                    messages: [...this.state.messages, {
                        text: "Hello, how can I help you?",
                        username: nameConsultant
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

    sendMessage = () => {
        /*this.state.hubConnection
            .invoke('sendById', "1", this.state.textMessage, this.state.username)
            .catch(err => console.error(err));
        debugger*/
        if (this.state.textMessage.trim()) {
            this.state.hubConnection
                .invoke('send', this.state.textMessage, this.state.username)
                .catch(err => console.error(err));
            this.setState({textMessage: ""});
            this.textArea.current.focus();
        }
    };

    onChangeMessage = (e) => {
        if (!e.target.value.match(/\n/)) {
            this.setState({textMessage: e.target.value});
        }
    }

    onKeyEnter = (e) => {
        if (e.charCode === 13) {
            this.sendMessage();
        }
    }

    render() {
        return (this.props.chatIsOpen) && <div className="bottom-right d-flex justify-content-end mb-3 mr-3">
            <div className="chat-container">
                <div className="border chat-container-top d-flex align-items-center justify-content-center">
                    <div className="w-100 chat-container-title">
                        <div className="d-flex">
                            <img className="img_size_4 rounded-circle"
                                 src="https://pp.userapi.com/c631925/v631925003/1aa08/aFe1PkzOKOM.jpg?ava=1"/>
                            <div className="ml-3 text-white">
                                <div>Consultant {(this.state.consultant.id) && this.state.consultant.name}</div>
                                <div className="chat-container-role">
                                    {(this.state.consultant.id) ? "Online" : "Offline"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <i onClick={() => STORE.dispatch(chatState(false))}
                           className="fas fa-times img_size_2 chat-container-button-close"></i>
                    </div>
                </div>

                <div className="border chat-container-content">
                    {
                        /*(this.state.messages.length === 0) && <div className="">
                            <div className="mt-2">
                                <div className="d-flex justify-content-center">
                                    Type your message
                                </div>
                                <div className="d-flex justify-content-center small">
                                    Consultant online!
                                </div>
                            </div>
                        </div>*/
                    }
                    {
                        this.state.messages.map((message, index) => {
                            return <ChatMessage key={index} isSender={true} username={message.username}
                                                message={message.text}/>
                        })
                    }
                </div>
                <div className="chat-container-bottom">
                    <textarea ref={this.textArea} onKeyPress={this.onKeyEnter} onChange={this.onChangeMessage}
                              value={this.state.textMessage}
                              className="chat-container-input text-muted"
                              placeholder="Type message"/>
                    <img onClick={this.sendMessage} className="chat-button-send"
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
