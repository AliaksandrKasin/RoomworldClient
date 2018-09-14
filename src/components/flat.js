import * as React from "react";
import Carousel from "./carusel";
import CardInfo from "./cardInfo";
import Rules from "./rules";
import Map from "./map";
import Calendar from 'react-calendar';
import Location from "./location";
import FlatMenu from "./flatMenu";
import QuickRent from "./quickRent";
import Description from "./description";
import Fasilities from "./facilities";

class Flat extends React.Component {
    render() {
        return <div className="container mt-5 flat">
            <Carousel/>
            <Location place="Belarus, Grodno"/>
            <FlatMenu/>

            <div className="mt-3"><h3>Apartment in Grodno with Internet, Pool, Parking, Washing machine</h3></div>
            <QuickRent/>

            <div className="row mt-3 justify-content-center">
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

            <Description body="* STUDIO FOR 4 PEOPLE including children (1 double bed,1 double sofa bed)
                    * Private feel, en-suite bathroom with shower and door locks
                    * 2 MIN WALK to Bayswater Tube Station, zone 1, District and Circle Line Metro (direct to
                    Notting
                    Hill, Victoria and Westminster) and 13 MIN WALK to the main Paddington Station, zone 1
                    (Bakerloo,
                    "/>


            <div className=" mt-5 pl-0 mb-5">
                <h5>House Rules</h5>
                <div className="row mt-4">
                    <h6 className="col-3 mw-200">Check-in: <small className="text-muted">12:00 PM</small></h6>
                    <h6 className="col-3 mw-200">Check-out: <small className="text-muted">10:00 PM</small></h6>
                </div>
                <div className=" bg-light ml-0">
                    <Rules state={false} text="No parties/events"/>
                    <Rules state={false} text="No smoking"/>
                    <Rules state={true} text="Children allowed"/>
                    <Rules state={false} text="No pets"/>
                    <h6 className="col-6 text-muted pb-4 mw-300">Minimum age of primary renter: <small
                        className="h5">18</small></h6>
                </div>
            </div>

            <Fasilities title="Amenities" amenites={["Internet", "TV", "Children Welcome", "Parking"]}/>
            <Fasilities title="General" amenites={["Heating", "Linens Provided", "Towels Provided"]}/>
            <Fasilities title="Kitchen" amenites={["Refrigerator", "Oven"]}/>

            <div className=" mt-5">
                <h4 className="mb-3">Rates & Availability</h4>
                <Calendar locale="en-En"/>
            </div>

            <div className="map_size_m mt-5">
                <h3 className="mb-3">Map</h3>
                <Map/>
                <Location place={"Belarus, Grodno"}/>
            </div>
        </div>
    }
}


export default Flat;