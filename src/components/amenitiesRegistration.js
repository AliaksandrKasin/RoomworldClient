import * as React from "react";
import Fasilities from "./facilities";
import connect from "react-redux/es/connect/connect";
import STORE from "../store";
import addAmenity from "../actions/addAmenities";
import amenitiesInitial from "../actions/amenitiesInitial";

class AmenitiesRegistration extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            amenity: {title: "Air Conditioning", type: "Amenities"}
        }
        STORE.dispatch(amenitiesInitial())
    }
    onChangeAmenity = (event) => {
        this.setState({amenity: {title: event.target.value, type: "Amenities"}})
    }

    listAmenities(amenities) {
        let arrayAmenities = [];
        amenities.map((amenity) => {
            arrayAmenities.push(amenity.title);
        })
        return <Fasilities key={0} title="Amenities" amenites={arrayAmenities}/>

    }

    onClickAddAmenity(amenity) {
        if (amenity.title !== "" && this.props.amenities.filter(x => x.title === amenity.title).length === 0) {
            STORE.dispatch(addAmenity(amenity));
            this.setState({amenities: {title: "", type: "Amenities"}})
        }
    }

    render(){
        return <div className="container border rounded_10 mb-5">
            {this.listAmenities(this.props.amenities)}
            <div className="row">
                <div className="col-8">
                    <select className="rounded h4 text-muted" onChange={this.onChangeAmenity}>
                        <option>Air Conditioning</option>
                        <option>Washing Machine</option>
                        <option>Internet</option>
                        <option>Microwave</option>
                        <option>Parking</option>
                        <option>Television</option>
                        <option>Coffee Maker</option>
                    </select>
                </div>
                <div className="col-4 text-right">
                    <button className="btn btn-secondary btn-primary rounded_10" onClick={() => this.onClickAddAmenity(this.state.amenity)} type="button">Add amenity
                    </button>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        amenities: state.flatReducer.amenities
    };
}

export default connect(mapStateToProps)(AmenitiesRegistration);
