import * as React from "react";

class ChatMessage extends React.Component {
    render() {
        return (this.props.isSender) ? <div className="mb-2">
                <div>
                    <div className="row">
                        <div className="col-9">
                            <div
                                className="speech-bubble speech-bubble-right ml-3 mt-2">Helloasdgfasdfadsfasdfadsfasddsfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgdfgsdfgsdfgsdfg
                                <div className="small text-right mt-2">16.10.2018 5:22</div>
                            </div>
                        </div>

                        <div className="col-2 ml-3 mt-5 pt-1">
                            <div className="text-muted ml-2 pl-1">You</div>
                            <img className="img_size_5"
                                 src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-128.png"/>
                        </div>
                    </div>
                </div>
            </div> :

            <div className="mb-2">
                <div>
                    <div className="row w-100">
                        <div className="col-2 mt-5 pt-5">
                            <img className="img_size_5"
                                 src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-128.png"/>
                        </div>

                        <div className="col-9">
                            <div className="speech-bubble speech-bubble-left ml-3 mt-2">
                                <div className="text-muted small">Manager:</div>
                                Helloasdgfasdfadsfasdfadsfasddsfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgdfgsdfgsdfgsdfg
                                <div className="small text-right mt-2">16.10.2018 5:22</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    }
}

export default ChatMessage;