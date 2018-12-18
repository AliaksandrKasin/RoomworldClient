import * as React from "react";

class AdminChatMessage extends React.Component{

    constructor(params) {
        super(params);
        this.message = React.createRef();
    }

    componentDidMount() {
        this.message.current.scrollIntoView();
    }

    render(){
        return <div ref={this.message} className="container-message d-flex align-items-center cursor-pointer border-bottom">
            <div>
                <div className="d-flex ">
                    <div className="text-center ml-3">
                        <img className="img_size_5 rounded-circle"
                             src="https://pp.userapi.com/c631925/v631925003/1aa08/aFe1PkzOKOM.jpg?ava=1"/>
                    </div>
                    <div className="ml-4">
                        <div className="d-flex align-items-center">
                            <div className="font-weight-bold">{this.props.name}</div>
                            <small className="ml-2">{new Date().toDateString()}</small>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <div className="ml-2 text-muted chat-message">{this.props.message}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default AdminChatMessage;