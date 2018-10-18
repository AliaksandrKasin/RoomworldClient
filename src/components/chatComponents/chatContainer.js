import * as React from "react";
import STORE from "../../store";
import {chatState} from "../../actions/chatActions/chatActions";
import connect from "react-redux/es/connect/connect";
import ChatMessage from "./chatMessage";

class ChatContainer extends React.Component {
    render() {
        return <div className="fixed-bottom d-flex justify-content-end mb-3 mr-3">
            <div className="chat-container rounded_10" hidden={!this.props.chatIsOpen}>
                <div className="border text-right bg-white chat-container-top">
                    <span className="h6 text-muted mr-5 pt-5">Chat with us!</span>
                    <img onClick={() => STORE.dispatch(chatState(false))}
                         className="img_size_2 mb-1 mr-2 mt-2 ml-4 button_cursor_pointer"
                         src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/down3-128.png"/>
                </div>
                <div className="border chat-container-content">
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                </div>
                <div className="chat-container-bottom bg-white rounded_10">
                    <textarea className="chat-container-input ml-2 text-muted" placeholder="Type your message and press Enter to send."/>
                    <img className="chat-button-send button_cursor_pointer" src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/send-128.png"/>
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
