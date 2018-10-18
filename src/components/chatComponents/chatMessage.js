import * as React from "react";

class ChatMessage extends React.Component {
    render() {
        return <div className="mb-2">
            <div>
                <div className="row">
                    <div className="col-9">
                        <div
                            className="speech-bubble ml-3 mt-2">Helloasdgfasdfadsfasdfadsfasddsfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgdfgsdfgsdfgsdfg
                            <div className="small text-right mt-2">16.10.2018 5:22</div>
                        </div>
                    </div>

                    <div className="col-2 ml-3 mt-5">
                        <div className="text-muted ml-2 pl-1">You</div>
                        <img className="img_size_5"
                             src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-128.png"/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ChatMessage;