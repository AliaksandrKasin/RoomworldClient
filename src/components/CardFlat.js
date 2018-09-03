import React from "react";

class CardFlat extends React.Component {
    render() {
        return <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-header bg-white h4">{this.props.name}</div>
                <img className="card-img-top"
                     src={this.props.image}
                     alt="Card cap"/>
                <div className="card-body">
                    <p className="card-text">{this.props.cardText}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted"><strong className="h5 text-info">{this.props.cost}€</strong> per
                            night
                        </small>
                        <a className="text-info">{this.props.location}</a>
                        <small className="text-muted">{this.props.date}</small>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default CardFlat