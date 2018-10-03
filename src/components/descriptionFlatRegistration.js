import * as React from "react";
import FieldDescription from "./fieldDescription";
import STORE from "../store";
import selectedFlat from "../actions/selectedFlat";
import connect from "react-redux/es/connect/connect";

class DescriptionFlatRegistration extends React.Component{

    onChangePlaceTitle = (event) => {
        let flat = this.props.flat;
        flat.placeTitle = event.target.value;
        STORE.dispatch(selectedFlat(flat))
    }

    onChangePlaceDescription = (event) => {
        let flat = this.props.flat;
        flat.placeDescription = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeSpaceOffered = (event) => {
        let flat = this.props.flat;
        flat.spaceOffered = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeAccommodates = (event) => {
        let flat = this.props.flat;
        flat.accommodates = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeSizeFlat = (event) => {
        let flat = this.props.flat;
        flat.sizeFlat = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangePrice = (event) => {
        let flat = this.props.flat;
        flat.price = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeCheckIn = (event) => {
        let flat = this.props.flat;
        flat.checkIn = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeCheckOut = (event) => {
        let flat = this.props.flat;
        flat.checkOut = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeAmountBathroom = (event) => {
        let flat = this.props.flat;
        flat.amountBathroom = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeAmountBedroom = (event) => {
        let flat = this.props.flat;
        flat.amountBedroom = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    render(){
        return <div className="container border rounded_10 mb-3 mt-3">
            <h4>Tell us about your place...</h4>

            <div className="text-left mb-4 w-100">
                <label className="text-muted">Place title:</label><br/>
                <input className="rounded w-75" type="text" onChange={this.onChangePlaceTitle}/>
            </div>

            <div className="text-left mb-4 w-100">
                <label className="text-muted">Place description:</label><br/>
                <textarea className="rounded w-75" onChange={this.onChangePlaceDescription}/>
            </div>

            <div className="row">
                <div className="col-4 text-left">
                    <label className="text-muted">Space offered:</label><br/>
                    <select className="rounded" onChange={this.onChangeSpaceOffered}>
                        <option>Entire place</option>
                        <option>Private room</option>
                        <option>Shared room</option>
                    </select>
                </div>
                <FieldDescription title="Accommodates:" onChange={this.onChangeAccommodates} type="number" value = {this.props.flat.accommodates}/>
                <FieldDescription title="Size flat:" onChange={this.onChangeSizeFlat} type="number"/>
                <FieldDescription title="Price per night(USD):" onChange={this.onChangePrice} type="number"/>
                <FieldDescription title="Check in:" onChange={this.onChangeCheckIn} type="time"/>
                <FieldDescription title="Check out:" onChange={this.onChangeCheckOut} type="time"/>
                <FieldDescription title="Amount bathroom:" onChange={this.onChangeAmountBathroom} type="number"/>
                <FieldDescription title="Amount bedroom:" onChange={this.onChangeAmountBedroom} type="number"/>

            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {
        flat: state.flatReducer.selectedFlat
    };
}

export default connect(mapStateToProps)(DescriptionFlatRegistration);