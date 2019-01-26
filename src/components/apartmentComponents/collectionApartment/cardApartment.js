import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {setSelectedApartment} from "../../../actions/apartmentActions/apartmentActions";

class CardApartment extends React.Component {
    render() {
        return <Link to="/vacation-rental" className="col-md-6 card-with mb-5 underline_none" onClick={() => {localStorage.setItem("selectedApartment", this.props.id)}}>
            <div className="card">
                <div>
                    <div className="">
                        <img src={this.props.image}
                             className="img-fluid"/>
                    </div>
                    <div className="px-3 text-left pb-3 mt-3">
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

function mapStateToProps(state) {
    return {
        selectedApartment: state.apartmentReducer.selectedApartment,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedApartment: details => {
            debugger
            dispatch(setSelectedApartment(details));
        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CardApartment);
