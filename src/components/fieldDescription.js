import * as React from "react";

class FieldDescription extends React.Component{
    render(){
        return <div className="col-4 text-left">
            <label className="text-muted">{this.props.title}</label><br/>
            <input className="rounded w-50 h5 " type={this.props.type} min="1" max="20"
                   onChange={this.props.onChange}/>
        </div>
    }
}

export default FieldDescription;