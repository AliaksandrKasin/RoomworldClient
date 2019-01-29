import React from "react";
import {Link} from "react-router-dom";
import {SERVER} from "../../../constants/constants";

class ApartmentSmallCard extends React.Component {

    formatDate = (date) => {
        return date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear();
    }

    showOrderInformation = () => {
        return (this.props.order) && < div className='border-top text-center'>
            <small className="text-muted mr-2">{this.formatDate(new Date(this.props.order.dateFrom))}</small>
            <small className="text-muted h5">-</small>
            <small className="text-muted ml-2">{this.formatDate(new Date(this.props.order.dateTo))}</small>
            <strong className="h6 text-info ml-4 pt-5">{this.props.order.sumPrice}€ </strong>
        </div>
    }

    render() {
        return <Link to="/vacation-rental" className="col-md-4 mb-5 underline_none" onClick={() => {
            localStorage.setItem("selectedApartment", this.props.id)
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
                            <small className="text-muted">{this.formatDate(new Date())}</small>
                        </div>
                        {this.showOrderInformation()}
                        {
                            (!!this.props.orderAmount) && <div className="text-left">
                                <small className="text-muted">Booked <small
                                    className="h6">{this.props.orderAmount}</small> times
                                </small>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Link>
    }
}

export default ApartmentSmallCard