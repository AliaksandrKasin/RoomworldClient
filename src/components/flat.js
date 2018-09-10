import * as React from "react";
import Carousel from "./carusel";

class Flat extends React.Component {
    render() {
        return <div className="container mt-5 container-width-800">
            <div><h2>Name flat</h2></div>
            <Carousel/>
            <div className="text-right mt-2">
                <a className="text-info">Belarus, Grodno</a>
            </div>

            <div className="row mt-3">
                <div className="col-2">
                    <div>
                        <img className="card-img" src="https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-10-128.png"
                             width="70px" height="70px"/>
                        <h6 className="card-title pl-2">Apartment</h6>
                        <small className="card-body">600 sq. ft.</small>
                    </div>

                </div>

                <div className="col-2">
                    <div>
                        <img className="card-img ml-1 img-width" src="https://cdn0.iconfinder.com/data/icons/real-estate-22/64/i217-512.png"
                             width="50px" height="70px"/>
                        <h6 className="card-title pl-2">Apartment</h6>
                        <small className="card-body">600 sq. ft.</small>
                    </div>

                </div>

                <div className="col-2">
                    <img src="https://cdn3.iconfinder.com/data/icons/furniture-vector-line-1/128/22-128.png"
                         width="48px" height="55px"/>
                </div>

                <div className="col-2">
                    <img src="https://cdn4.iconfinder.com/data/icons/silky-icon-user/60/users2-1-128.png" width="55px"
                         height="55px"/>
                </div>
            </div>
            <h3 className="mt-3">Description</h3>
            <div className="row mt-4 ml-0">
                <div className="col-6 pl-0">
                    * STUDIO FOR 4 PEOPLE including children (1 double bed,1 double sofa bed)
                    * Private feel, en-suite bathroom with shower and door locks
                    * 2 MIN WALK to Bayswater Tube Station, zone 1, District and Circle Line Metro (direct to Notting
                    Hill, Victoria and Westminster) and 13 MIN WALK to the main Paddington Station, zone 1 (Bakerloo,
                    Circle, District, Hammersmith & City lines - Heathrow Express - Crossrail - National Rail)
                    * 5 MIN WALK to HYDE PARK
                    * Non-smoking apartment
                    * FREE WIFI & BILLS ARE INCLUDED, but NOT ELECTRICITY (the apartment has an electricity meter, which
                    will be topped up by a client on pay as you go system)
                </div>
            </div>

        </div>
    }
}


export default Flat;