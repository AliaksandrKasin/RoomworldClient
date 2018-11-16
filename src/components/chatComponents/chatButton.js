import * as React from "react";
import STORE from "../../store";
import {chatState, initialState} from "../../actions/chatActions/chatActions";
import connect from "react-redux/es/connect/connect";

class ChatButton extends React.Component {

    constructor(props) {
        super(props);
        STORE.dispatch(chatState(false));
    }

    render() {
        return (!this.props.chatIsOpen) && <div className="chat-icon rounded-circle bottom-right text-right mb-3 mr-3">
            <i onClick={() => STORE.dispatch(chatState(true))}
               className="far fa-comments"></i>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        chatIsOpen: state.chatReducer.chat.isOpen,
    };
}

export default connect(mapStateToProps)(ChatButton);