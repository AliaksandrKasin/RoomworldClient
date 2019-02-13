import * as React from "react";
import {SERVER} from "../../../../constants";
import ReactCountryFlag from "react-country-flag";

class CardImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    nextImg = () => {
        let increment = this.state.counter + 1;
        (this.props.apartment.images.length > increment) && this.setState({counter: increment});
    }

    prevImg = () => {
        let decrement = this.state.counter - 1;
        (decrement >= 0) && this.setState({counter: decrement});
    }

    render() {
        return <div>
            <img src={SERVER + this.props.apartment.images[this.state.counter]}
                 className={(this.props.type === "vertical") ? "card-vertical__image img-fluid" : "card-horizontal__image img-fluid"}/>
            <div
                className={(this.props.type === "vertical") ? "box-location box-location_position_r" : "box-location box-location_position_l"}>
                <div className="pl-2 pb-1"><ReactCountryFlag code={this.props.shortCountryName} svg/></div>
                <span className="box-location__title text-capitalize pl-2">
                                {this.props.apartment.apartmentLocation.country}
                    {(this.props.apartment.apartmentLocation.country && this.props.apartment.apartmentLocation.city)
                    && ", " + this.props.apartment.apartmentLocation.city}
                                </span>
            </div>
            <div className="container-favorite rounded-circle bg-white">
                <i className="container-favorite__heart far fa-heart fa-heart_size_m"></i>
            </div>
            <div>
                <button
                    className="carousel-control-prev carousel-control-prev_size_s bg-transparent border-0 cursor-pointer"
                    onClick={this.prevImg}>
                    <span className="carousel-control-prev-icon "></span>
                </button>
                <button
                    className="carousel-control-next carousel-control-next_size_s bg-transparent border-0 cursor-pointer"
                    onClick={this.nextImg}>
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    }
}

export default CardImage;