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
        return <div className="fixed-bottom text-right mb-3 mr-3">
            <img onClick={() => STORE.dispatch(chatState(true))} className="chat-icon rounded-circle"
                 src="https://cdn3.iconfinder.com/data/icons/common-7/32/Chat-128.png"
            hidden={this.props.chatIsOpen}/>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        chatIsOpen: state.chatReducer.chat.isOpen,
    };
}

export default connect(mapStateToProps)(ChatButton);