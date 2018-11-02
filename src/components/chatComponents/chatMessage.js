import * as React from "react";

class ChatMessage extends React.Component {

    constructor(params){
        super(params);
        this.chatContainer = React.createRef();
        this.state = {
            currentTime: this.currentTime()
        }
    }

    plusZeroToTimePart = (timePart) => {
        return ((timePart < 10) ? "0" + timePart : timePart);
    }

    currentTime = () => {
        let date = new Date();
        return this.plusZeroToTimePart(date.getHours()) + ":" + this.plusZeroToTimePart(date.getMinutes()) + ":" + this.plusZeroToTimePart(date.getSeconds());
    }

    componentDidMount() {
        this.chatContainer.current.scrollIntoView();
    }

    render() {
        return (this.props.username === localStorage.getItem("username")) ? <div ref={this.chatContainer} className="mb-2">
                <div>
                    <div className="row">
                        <div className="col-9">
                            <div
                                className="speech-bubble speech-bubble-right ml-3 mt-2">
                                <div className="text-muted small">{this.props.username}</div>
                                {this.props.message}
                                <div className="small text-right mt-2">{this.state.currentTime}</div>
                            </div>
                        </div>

                        <div className="col-2 ml-3 mt-4 pt-3">
                            <div className="text-muted ml-2 pl-1">You</div>
                            <img className="img_size_5"
                                 src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-128.png"/>
                        </div>
                    </div>
                </div>
            </div> :

            <div className="mb-2" ref={this.chatContainer}>
                <div>
                    <div className="row">
                        <div className="col-2 mt-5 pt-2">
                            <img className="img_size_5"
                                 src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-128.png"/>
                        </div>

                        <div className="col-9">
                            <div className="speech-bubble speech-bubble-left ml-3 mt-2">
                                <div className="text-muted small">{this.props.username}</div>
                                {this.props.message}
                                <div className="small text-right mt-2">{this.currentTime()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    }
}

export default ChatMessage;