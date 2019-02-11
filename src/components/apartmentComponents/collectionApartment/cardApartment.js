import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {setSelectedApartment} from "../../../actions/apartmentActions/apartmentActions";
import {SERVER} from "../../../constants";
import ReactCountryFlag from "react-country-flag";
import StarRatings from 'react-star-ratings';

class CardApartment extends React.Component {

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
        return <div className="col-sm-6 card-sm mb-5 cursor-pointer">
            <div className="card card-shadow">
                <div>
                    <div className="position-relative">
                        <img src={SERVER + this.props.images[this.state.counter]}
                             className="apartment-card-image img-fluid"/>
                        <div className="apartment-location-container d-flex justify-content-center align-items-center">
                            <div className="pl-2 pb-1"><ReactCountryFlag code={this.props.shortCountryName} svg/></div>
                            <span
                                className="text-capitalize apartment-location-title pl-2">{this.props.location.country}
                                {(this.props.location.country && this.props.location.city) && ", " + this.props.location.city}</span>
                        </div>
                        <div className="container-favorite rounded-circle bg-white">
                            <i className="far fa-heart"></i>
                        </div>
                        <div>
                            <button className="carousel-control-prev bg-transparent border-0 cursor-pointer"
                                    onClick={this.prevImg}>
                                <span className="carousel-control-prev-icon "></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next bg-transparent border-0 cursor-pointer"
                                    onClick={this.nextImg}>
                                <span className="carousel-control-next-icon"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="px-3 text-left mt-3">
                        <Link to="/vacation-rental" onClick={() => {
                            localStorage.setItem("selectedApartment", this.props.id)
                        }}>
                            <h4 className="card-title title_size_1 text-dark">{this.props.name}</h4>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center pl-2 pr-2 mb-2 text-muted">
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
                    <div className="pb-2 card-price-container">
                        <div className="w-100">
                            <strong className="h5 text-dark">{this.props.cost}€ <small>per night</small></strong>
                        </div>
                        <div className="rating-container w-100 d-flex justify-content-end">
                            <StarRatings rating={4.2} starRatedColor="gold" numberOfStars={5}
                                         name='rating' starDimension="18px"
                                         starSpacing="2px" isSelectable={true}
                                         isAggregateRating={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
            dispatch(setSelectedApartment(details));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardApartment);
