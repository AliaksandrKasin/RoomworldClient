import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {setApartmentDetails, setApartmentTypes} from "../../actions/apartmentActions/apartmentActions";
import {chatState} from "../../actions/chatActions/chatActions";

class ChatButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="chat-icon" onClick={() => this.props.chatState(!this.props.chatIsOpen)}>
            <i className="material-icons">chat_bubble_outline</i>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        chatIsOpen: state.chatReducer.chat.isOpen,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        chatState: details => {
            dispatch(chatState(details));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatButton);
