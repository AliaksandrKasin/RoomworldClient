import * as React from "react";
import {SERVER} from "../../../constants";
import ReactCountryFlag from "react-country-flag";
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";

class CardHorizontalApartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    nextImg = () => {
        let increment = this.state.counter + 1;
        (this.props.images.length > increment) && this.setState({counter: increment});
    }

    prevImg = () => {
        let increment = this.state.counter - 1;
        (increment >= 0) && this.setState({counter: increment});
    }

    render() {
        return <div className="mb-3 cursor-pointer w-100 card-horizontal-container">
            <div className="card card-shadow">
                <div className="d-flex align-items-end">
                    <div className="position-relative card-hor-img-container">
                        <img src={SERVER + this.props.images[this.state.counter]}
                             className="card-horizontal-image img-fluid"/>
                        <div
                            className="apartment-location-container-hor d-flex justify-content-center align-items-center">
                            <div className="pl-2 pb-1"><ReactCountryFlag code={this.props.shortCountryName} svg/></div>
                            <span
                                className="text-capitalize apartment-location-title pl-2">{this.props.location.country}
                                {(this.props.location.country && this.props.location.city) && ", " + this.props.location.city}</span>
                        </div>
                        <div className="container-favorite rounded-circle bg-white">
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="">
                            <button
                                className="carousel-control-prev carousel-control-prev-hor bg-transparent border-0 cursor-pointer"
                                onClick={this.prevImg}>
                                <span className="carousel-control-prev-icon "></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next carousel-control-next-hor bg-transparent border-0 cursor-pointer"
                                onClick={this.nextImg}>
                                <span className="carousel-control-next-icon"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="card-price-container-hor w-100">
                        <div className="w-100 position-relative">
                            <div className="w-100 container-desc position-relative">
                                <div className="d-flex align-items-center ml-3 pt-2">
                                    <i className="fas fa-eye text-muted"></i>
                                    <small className="text-muted ml-2">Viewed 876 times in the last 48 hours</small>
                                </div>
                                <div className="text-left pl-3 pt-2">
                                    <Link to="/vacation-rental" onClick={() => {
                                        localStorage.setItem("selectedApartment", this.props.id)
                                    }}>
                                        <h4 className="card-title title_size_1 text-dark m-0">{this.props.name}</h4>
                                    </Link>
                                </div>

                                <div className="d-flex align-items-center text-muted pl-2">
                                    <div className="p-2">
                                        <span>{this.props.typeApart}</span>
                                    </div>
                                    <div className="p-2">
                                        <span>{this.props.amauntBath + "BA"}</span>
                                    </div>
                                    <div className="p-2">
                                        <span>{this.props.amountBed + "BR"}</span>
                                    </div>
                                    <div className="p-2">
                                        <span>{"SP " + this.props.accommodates}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <small className="w-100 pl-3 text-dark-green font-weight-6">Available from {new Date().toDateString()}</small>
                                <div className="d-flex align-items-end pt-2">
                                    <div className="w-100 pl-3">
                                        <strong className="h5 text-dark">{this.props.cost}€ <small>per night</small>
                                        </strong>
                                    </div>
                                    <div className="rating-container w-100 d-flex justify-content-end pr-2">
                                        <StarRatings rating={4.2} starRatedColor="gold" numberOfStars={5}
                                                     name='rating' starDimension="18px"
                                                     starSpacing="2px" isSelectable={true}
                                                     isAggregateRating={true}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CardHorizontalApartment;