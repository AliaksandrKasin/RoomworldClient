import * as React from "react";
import FieldDescription from "./fieldDescription";
import STORE from "../store";
import {
    changeAccommodates, changeCheckIn,
    changeCheckOut, changeCountBathroom,
    changeCountBedroom, changeDescription,
    changeName, changePrice,
    changeSize, changeSpaceOffered
} from "../actions/registrationFlat/registrationFlatActions";

class DescriptionFlatRegistration extends React.Component {

    render() {
        return <div className="container border rounded_10 mb-3 mt-3">
            <h4>Tell us about your place...</h4>

            <div className="text-left mb-4 w-100">
                <label className="text-muted">Place title:</label><br/>
                <input className="rounded w-75" type="text"
                       onChange={(e) => STORE.dispatch(changeName(e.target.value))}/>
            </div>

            <div className="text-left mb-4 w-100">
                <label className="text-muted">Place description:</label><br/>
                <textarea className="rounded w-75" onChange={(e) => STORE.dispatch(changeDescription(e.target.value))}/>
            </div>

            <div className="row">

                <div className="col-4 text-left">
                    <label className="text-muted">Space offered:</label><br/>
                    <select className="rounded" onChange={(e) => STORE.dispatch(changeSpaceOffered(e.target.value))}>
                        <option>Entire place</option>
                        <option>Private room</option>
                        <option>Shared room</option>
                    </select>
                </div>

                <FieldDescription title="Accommodates:" type="number"
                                  onChange={(e) => STORE.dispatch(changeAccommodates(e.target.value))}/>

                <FieldDescription title="Size flat:" type="number"
                                  onChange={(e) => STORE.dispatch(changeSize(e.target.value))}/>

                <FieldDescription title="Price per night(USD):" type="number"
                                  onChange={(e) => STORE.dispatch(changePrice(e.target.value))}/>

                <FieldDescription title="Check in:" type="time"
                                  onChange={(e) => STORE.dispatch(changeCheckIn(e.target.value))}/>

                <FieldDescription title="Check out:" type="time"
                                  onChange={(e) => STORE.dispatch(changeCheckOut(e.target.value))}/>

                <FieldDescription title="Amount bathroom:" type="number"
                                  onChange={(e) => STORE.dispatch(changeCountBathroom(e.target.value))}/>

                <FieldDescription title="Amount bedroom:" type="number"
                                  onChange={(e) => STORE.dispatch(changeCountBedroom(e.target.value))}/>

            </div>

        </div>
    }
}

export default DescriptionFlatRegistration;
