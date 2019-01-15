import * as React from "react";
import ApartmentDetails from "./apartmentDetails";
import ProgressBar from "../snippet/progressBar";
import {Route, Switch} from "react-router-dom";
import CounterAmenity from "./counterAmenity";
import ApartmentFooter from "./apartmentFooter";
import ApartmentLocation from "./apartmentLocation";
import ApartmentPhotos from "./apartmentPhotos";

class RegistrationApartment extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        document.body.style.backgroundColor = "#f7f7f8";
    }

    render() {
        return <div className="mt-5">
            <div className="container d-flex justify-content-center mb-5 position-relative">
                <ProgressBar/>
            </div>
            <Switch>
                <Route path={'/apartment/details'} component={ApartmentDetails}/>
                <Route path={'/apartment/location'} component={ApartmentLocation}/>
                <Route path={'/apartment/photos'} component={ApartmentPhotos}/>
                <Route path={'/apartment'} component={CounterAmenity}/>
            </Switch>
            <ApartmentFooter/>
        </div>
    }
}

export default RegistrationApartment;