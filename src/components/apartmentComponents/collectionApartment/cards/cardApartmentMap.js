import * as React from "react";
import CardImage from "./cardImage";
import StarRatings from "react-star-ratings";

class CardApartmentMap extends React.Component{
    render(){
        return <div>
            <div className="position-relative">
                <CardImage apartment={this.props.apartment} shortCountryName="fr"/>
            </div>
            <ul className="nav box-apartment-info d-flex align-items-center text-muted pl-2 pt-2">
                <li className="nav-item nav-item-marker-point pl-2">Apartment</li>
                <li className="nav-item nav-item-marker-point pl-3">{1 + "BA"}</li>
                <li className="nav-item nav-item-marker-point pl-3">{1 + "BR"}</li>
            </ul>
            <div className="w-100 pl-3 mt-2 mb-2">
                <strong className="w-100 h5 text-dark">200€ <small>/night</small>
                </strong>
            </div>
        </div>
    }
}

export default CardApartmentMap;