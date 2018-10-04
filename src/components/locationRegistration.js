import * as React from "react";
import LocationFieldText from "./locationField";
import LocationFieldNumber from "./locationFieldNumber";
import STORE from "../store";
import {
    changeCity, changeCountry,
    changeNumberFlat, changeNumberHouse,
    changeNumberHouseBlock
} from "../actions/registrationFlat/registrationFlatActions";


class LocationRegistration extends React.Component {

    render() {
        return <div className="container border rounded_10 mb-3">
            <h4>Location</h4>
            <LocationFieldText title="Country: "
                               onChange={(e) => STORE.dispatch(changeCountry(e.target.value))}/>
            <LocationFieldText title="City: "
                               onChange={(e) => STORE.dispatch(changeCity(e.target.value))}/>

            <div className="row">
                <LocationFieldNumber title="Number house: "
                                     onChange={(e) => STORE.dispatch(changeNumberHouse(e.target.value))}/>
                <LocationFieldNumber title="Number house block: "
                                     onChange={(e) => STORE.dispatch(changeNumberHouseBlock(e.target.value))}/>
                <LocationFieldNumber title="Number flat: "
                                     onChange={(e) => STORE.dispatch(changeNumberFlat(e.target.value))}/>
            </div>
        </div>
    }
}

export default LocationRegistration;
