import * as React from "react";

class ChatMessage extends React.Component {

    constructor(params) {
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
        return (this.props.username === localStorage.getItem("username"))
            ? <div ref={this.chatContainer} className="mb-2">
                <div>
                    <div className="d-flex justify-content-end">
                        <div className="mb-4">
                            <div className="speech-bubble speech-bubble-right ml-3 mt-2">
                                <div className="text-muted small">{this.props.username}</div>
                                {this.props.message}
                                <div className="small text-right mt-2">{this.state.currentTime}</div>
                            </div>
                        </div>

                        <div className="d-flex align-items-end">
                            <div className="ml-3 mt-4 pt-3">
                                <div className="text-muted ml-2 pl-1 mb-2">You</div>
                                <img className="img_size_5 mr-2 rounded-circle"
                                     src={(false) ? "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-128.png"
                                : "https://prikolnye-kartinki.ru/img/picture/Dec/25/6a1b98d14a1701d5b78bcc01512557f4/1.jpg"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :

            <div className="mb-2" ref={this.chatContainer}>
                <div>
                    <div className="d-flex">
                        <div className="mt-5 pt-2 d-flex align-items-end">
                            <img className="img_size_5 ml-2 rounded-circle"
                                 src={(false) ? "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-128.png"
                                     : "https://pp.userapi.com/c631925/v631925003/1aa08/aFe1PkzOKOM.jpg?ava=1"}/>
                        </div>

                        <div className="mb-4">
                            <div className="speech-bubble speech-bubble-left ml-3 mt-2">
                                <div className="text-muted small">{this.props.username}</div>
                                {this.props.message}
                                <div className="small text-right mt-2">{this.state.currentTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    }
}

export default ChatMessage;