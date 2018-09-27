import * as React from "react";
import STORE from "../store";
import selectedFlat from "../actions/selectedFlat";
import LocationFieldText from "./locationField";
import LocationFieldNumber from "./locationFieldNumber";
import connect from "react-redux/es/connect/connect";


class LocationRegistration extends React.Component{

    constructor(props){
        super(props);
    }

    onChangeCountry = (event) => {
        let flat = this.props.flat;
        flat.location.country = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeCity = (event) => {
        let flat = this.props.flat;
        flat.location.city = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeNumberHouse = (event) => {
        let flat = this.props.flat;
        flat.location.numberHouse = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeNumberHouseBlock = (event) => {
        let flat = this.props.flat;
        flat.location.numberHouseBlock = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeNumberFlat = (event) => {
        let flat = this.props.flat;
        flat.location.numberFlat = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    render(){
        return <div className="container border rounded_10 mb-3">
            <h4>Location</h4>
            <LocationFieldText title="Country: " onChange={this.onChangeCountry}/>
            <LocationFieldText title="City: " onChange={this.onChangeCity}/>

            <div className="row">
                <LocationFieldNumber title="Number house: " onChange={this.onChangeNumberHouse}/>
                <LocationFieldNumber title="Number house block: " onChange={this.onChangeNumberHouseBlock}/>
                <LocationFieldNumber title="Number flat: " onChange={this.onChangeNumberFlat}/>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        flat: state.flatReducer.selectedFlat
    };
}

export default connect(mapStateToProps)(LocationRegistration);
