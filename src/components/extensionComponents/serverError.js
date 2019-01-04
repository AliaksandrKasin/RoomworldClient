import * as React from "react";

class ServerError extends React.Component{
    render(){
        return <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h1>500</h1>
                <h3>Internal server error</h3>
            </div>
        </div>
    }
}

export default ServerError;