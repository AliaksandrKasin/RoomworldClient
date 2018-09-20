import React from "react";
import CardFlat from "./cardFlat";
import axios from "axios";
import {SERVER} from "../constants/constants";
import Map from "./map";
import STORE from "../store";
import {connect} from 'react-redux';
import listFlat from "../actions/listflat";

class AlbomCardFlat extends React.Component {

    constructor(props) {
        super(props);
        this.getFlats();
    }

    getFlats() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/get-flat', {
                Country: "Belarus",
                City: "Grodno",
                Accommodates: "3"
            }
        )
            .then((response) => {
                STORE.dispatch(listFlat(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    formatDate(date) {
        return date.getUTCDay() + "/" + date.getUTCMonth() + "/" + date.getFullYear();
    }

    render() {
        return <div className="ml-5 mt-3">
            <div className="row">
                <div className="container col-6 container_flex_none container_width_none">
                    <div className="container__title border mb-4 rounded_10 p-2">
                        <h3>Belarus <small className="text-muted">({Object.values(this.props.flats).length} places found)</small></h3>
                    </div>
                    <div className="row">
                        {
                            this.props.flats.map((flat, index) => {
                                return <CardFlat
                                    id={flat.id}
                                    key={flat.id}
                                    index = {index}
                                    name={flat.name}
                                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1658f9fd45d%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1658f9fd45d%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    cardText={flat.description}
                                    cost={flat.cost}
                                    location="Belarus, Grodno"
                                    date={this.formatDate(new Date(flat.createdDate))}
                                />
                            })}
                    </div>
                    <div className="text-center">
                        <button className="btn btn-secondary btn-primary input_size_s w-50 rounded_10" type='button'
                                onClick={this.getFlats}>Show more
                        </button>
                    </div>
                </div>

                <div className="map-sticky-container sticky-top col-5">
                    <Map/>
                </div>
            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {
        flats: state.flatReducer.flats

    };
}


export default connect(mapStateToProps)(AlbomCardFlat);