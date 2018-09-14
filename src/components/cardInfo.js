import * as React from "react";

class CardInfo extends React.Component {
    render() {
        return <div className="col-2">
            <div className="text-center card_size_s">
                <img className="img_size_4" src={this.props.img}/>
                <small className="card-body text-muted">{this.props.body}</small>
                <h6 className="card-title mt-2 text-muted">{this.props.title}</h6>
            </div>
        </div>
    }
}

export default CardInfo;