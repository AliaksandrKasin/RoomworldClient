import * as React from "react";
import STORE from "../../store";
import {chatState} from "../../actions/chatActions/chatActions";
import connect from "react-redux/es/connect/connect";

class ChatButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (!this.props.chatIsOpen)
            && <div className="chat-icon rounded-circle bottom-right text-right mb-3 mr-3"
                    onClick={() => STORE.dispatch(chatState(true))}>
            <i className="fas fa-headset"></i>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        chatIsOpen: state.chatReducer.chat.isOpen,
    };
}

export default connect(mapStateToProps)(ChatButton);