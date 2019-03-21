import * as React from "react";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";
import moment from "moment";

class CardDetails extends React.Component{

    render(){
        return    <div className="card-apartment-details w-100">
            <div className="position-relative w-100">
                <div className="container-description position-relative w-100">
                    <div className="d-flex align-items-center ml-3 pt-2">
                        <i className="fas fa-eye text-muted"></i>
                        <small className="text-muted ml-2">Viewed 876 times in the last 48 hours</small>
                    </div>
                    <div className="text-left pl-3 pt-2">
                        <Link to="/vacation-rental"
                              onClick={() => {
                                  localStorage.setItem("selectedApartment", this.props.id)
                              }}>
                            <h6 className="container-description-title text-dark m-0">{this.props.name}</h6>
                        </Link>
                    </div>
                    <ul className="nav box-apartment-info d-flex align-items-center text-muted pl-2 pt-2">
                        <li className="nav-item nav-item-marker-point pl-2">{this.props.typeApart}</li>
                        <li className="nav-item nav-item-marker-point pl-3">{this.props.amauntBath + "BA"}</li>
                        <li className="nav-item nav-item-marker-point pl-3">{this.props.amountBed + "BR"}</li>
                        <li className="nav-item nav-item-marker-point pl-3">{"SP " + this.props.accommodates}</li>
                    </ul>
                </div>
                <div>
                    <small className="text_color_dark-green font-weight-6 w-100 pl-3">Available
                        from {moment(this.props.createdDate).format("MMMM Do YYYY")}</small>
                    <div className="d-flex align-items-end pt-2">
                        <div className="w-100 pl-3">
                            <strong className="h5 text-dark">{this.props.cost}€ <small>per night</small>
                            </strong>
                        </div>
                        <div className="d-flex justify-content-end w-100 pr-2">
                            <StarRatings rating={4.2} starRatedColor="gold" numberOfStars={5}
                                         name='rating' starDimension="18px" starSpacing="2px"
                                         isSelectable={true} isAggregateRating={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CardDetails;