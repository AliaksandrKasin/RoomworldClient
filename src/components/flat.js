import * as React from "react";
import Carousel from "./carusel";
import CardInfo from "./cardInfo";
import Rules from "./rules";
import SimpleMap from "./map";
import Calendar from 'react-calendar';
import DatePicker from "react-date-picker";

class Flat extends React.Component {
    render() {
        return <div className="container mt-5">
            <Carousel/>
            <div className="text-left mt-2">
                <img className="img-small mr-1"
                     src="https://cdn4.iconfinder.com/data/icons/mayssam/512/location-512.png"/>
                <a className="text-muted">Belarus, Grodno</a>
            </div>

            <div className="mt-3"><h3>Apartment in Grodno with Internet, Pool, Parking, Washing machine</h3></div>

            <div className="row mt-3">
                <CardInfo img="https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-10-512.png"
                          body="Apartment" title="600 sq. ft."/>
                <CardInfo
                    img="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-52-512.png"
                    body="Bathrooms" title="1"/>
                <CardInfo img="https://cdn3.iconfinder.com/data/icons/furniture-vector-line-1/128/22-128.png"
                          body="Bedrooms" title="1"/>
                <CardInfo img="https://cdn4.iconfinder.com/data/icons/silky-icon-user/60/users2-1-128.png"
                          body="Sleeps"
                          title="2"/>
            </div>

            <h3 className="mt-3">Description</h3>
            <div className="row mt-4 ml-0">

                <div className="col-10 pl-0 text-muted">
                    * STUDIO FOR 4 PEOPLE including children (1 double bed,1 double sofa bed)
                    * Private feel, en-suite bathroom with shower and door locks
                    * 2 MIN WALK to Bayswater Tube Station, zone 1, District and Circle Line Metro (direct to
                    Notting
                    Hill, Victoria and Westminster) and 13 MIN WALK to the main Paddington Station, zone 1
                    (Bakerloo,
                    Circle, District, Hammersmith & City lines - Heathrow Express - Crossrail - National Rail)
                    * 5 MIN WALK to HYDE PARK
                    * Non-smoking apartment
                    * FREE WIFI & BILLS ARE INCLUDED, but NOT ELECTRICITY (the apartment has an electricity meter,
                    which
                    will be topped up by a client on pay as you go system)
                </div>

            </div>

            <div className="container mt-5 pl-0 mb-5">
                <h5>House Rules</h5>
                <div className="row mt-4">
                    <h6 className="col-3 check">Check-in: <small className="text-muted">12:00 PM</small></h6>
                    <h6 className="col-3 check">Check-out: <small className="text-muted">10:00 PM</small></h6>
                </div>
                <div className="container bg-light ml-0 container-max-width-1">
                    <Rules state={false} text="No parties/events"/>
                    <Rules state={false} text="No smoking"/>
                    <Rules state={true} text="Children allowed"/>
                    <Rules state={false} text="No pets"/>
                    <h6 className="col-6 text-muted pb-4">Minimum age of primary renter: <small
                        className="h6">18</small></h6>
                </div>
            </div>

            <div className="container pl-0">
                <h4>Amenities</h4>
                <div>
                    <ul className="amenities border-bottom border-top pl-0 text-muted">
                        <li className="amenity-single">Internet</li>
                        <li className="amenity-single">TV</li>
                        <li className="amenity-single">Children Welcome</li>
                        <li className="amenity-single">Parking</li>
                    </ul>
                </div>
            </div>

            <div className="container pl-0">
                <h4>General</h4>
                <div>
                    <ul className="amenities border-bottom border-top pl-0 text-muted">
                        <li className="amenity-single">Heating</li>
                        <li className="amenity-single">Linens Provided</li>
                        <li className="amenity-single">Linens Provided</li>
                        <li className="amenity-single">Towels Provided</li>
                    </ul>
                </div>
            </div>

            <div className="container pl-0">
                <h4>Kitchen</h4>
                <div>
                    <ul className="amenities border-bottom border-top pl-0 text-muted">
                        <li className="amenity-single">Refrigerator</li>
                        <li className="amenity-single">Oven</li>

                    </ul>
                </div>
            </div>
            <div className="mt-5">
                <h4>Rates & Availability</h4>
                <Calendar/>
            </div>
            <div className="book border">
                <h3 className="mt-5 ml-4">$162 <small className="text-muted">per night</small></h3>

                <div className="col-8 text-center card-min">
                    <img className="img-width"
                         src="https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/check_round-512.png"
                    />
                    <small className="card-body text-muted">Your dates are Available!</small>
                </div>
                <DatePicker
                    className="search"
                    value={new Date()}
                    onChange={this.onChangeFrom}
                    minDate={new Date()}
                />

                <DatePicker
                    className="search"
                    value={new Date()}
                    onChange={this.onChangeTo}
                    minDate={new Date()}
                />

                <div className="ml-4 mt-4 text-muted row">
                    <h5 className="col-sm-6 pb-3">Total</h5>
                    <small className="col-sm-5 text-right h5">$1,135.72</small>
                </div>

                <div className="ml-4 text-muted row">
                    <h5 className="col-sm-6 pb-3 small">Includes taxes and fees</h5>
                    <a className="col-sm-5 text-right text-info h5 small">View details</a>
                </div>

                <div className="text-center mb-4">
                    <button onClick={this.signIn} className="btn btn-lg btn-primary" type='button'>Book Now
                    </button>
                </div>
            </div>
        </div>
    }
}


export default Flat;