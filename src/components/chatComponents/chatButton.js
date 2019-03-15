import * as React from "react";
import connect from "react-redux/es/connect/connect";

class ChatButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="chat-icon">
            <i className="material-icons">chat_bubble_outline</i>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        chatIsOpen: state.chatReducer.chat.isOpen,
    };
}

export default connect(mapStateToProps)(ChatButton);