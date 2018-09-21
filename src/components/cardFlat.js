import React from "react";
import STORE from "../store";
import {Link} from "react-router-dom";
import idSelectedFlat from "../actions/idSelectedFlat";
import selectedFlat from "../actions/search";


class CardFlat extends React.Component {
    render() {
        return <Link to="/flat" className="col-md-6 card-with mb-5 underline_none" onClick={() => {
            STORE.dispatch(idSelectedFlat(this.props.id));
        }}>
            <div className="card">
                <div>
                    <img src="https://odis.homeaway.com/odis/listing/e2a65868-2ef6-42f8-aca7-46d2f771197b.c10.jpg"
                         className="img-fluid"/>
                    <div className="px-3 text-left pb-3 mt-3">
                        <small className="text-muted">Viewed 6 times in the last 48 hours</small>
                        <h4 className="card-title title_size_1 text-dark">{this.props.name}</h4>
                        <div className="d-flex justify-content-between align-items-center pt-4 mt-4">
                            <div className="pb-2">
                                <strong className="h4 text-dark">{this.props.cost}€ </strong>
                                <small className="text-muted">per night</small>
                            </div>
                            <small className="text-info">{this.props.location}</small>
                            <small className="text-muted">{this.props.date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    }
}

export default CardFlat