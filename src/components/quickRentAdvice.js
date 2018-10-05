import * as React from "react";

class QuickRentAdvice extends React.Component{
    render(){
        return <div className="row">
            <div className="col-3 mt-3">
                <img className="img_size_4" src={this.props.image}/>
            </div>
            <div className="col-9">
                <h6 className="mt-3">{this.props.title}</h6>
                <small className="text-muted">{this.props.body}
                </small>
            </div>
        </div>
    }
}

export default QuickRentAdvice;