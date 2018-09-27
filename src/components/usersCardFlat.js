import React from "react";
import {Link} from "react-router-dom";
import STORE from "../store";
import idSelectedFlat from "../actions/idSelectedFlat";
import {SERVER} from "../constants/constants";

class UsersCardFlat extends React.Component {
    render() {
        return <Link to="/flat" className="col-md-4 mb-5 underline_none" onClick={() => {
            STORE.dispatch(idSelectedFlat(this.props.id));
        }}>
            <div className="card">
                <div>
                    <img src={SERVER + this.props.image}
                         className="img-fluid"/>
                    <div className="px-3 text-left pb-3 mt-3">
                        <h4 className="card-title title_size_1 text-dark">{this.props.name}</h4>
                        <div className="d-flex justify-content-between align-items-center pt-4 mt-4">
                            <div className="pb-2">
                                <strong className="h4 text-dark">{this.props.cost}€ </strong>
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

export default UsersCardFlat