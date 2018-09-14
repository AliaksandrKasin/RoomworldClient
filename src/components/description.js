import * as React from "react";

class Description extends React.Component{
    render(){
        return  <div className="mt-4 ml-0">
            <h3 className="mt-3">Description</h3>
            <div className="pl-0 text-muted">
                {this.props.body}
            </div>
        </div>
    }
}

export default Description;