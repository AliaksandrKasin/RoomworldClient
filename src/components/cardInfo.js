import * as React from "react";

class CardInfo extends React.Component{
    render(){
        return <div className="col-2">
            <div className="text-center card-min">
                <img className="img-width" src={this.props.img}
                />
                <small className="card-body text-muted">{this.props.body}</small>
                <h6 className="card-title mt-2 text-muted">{this.props.title}</h6>
            </div>
        </div>
    }
}

export default CardInfo;