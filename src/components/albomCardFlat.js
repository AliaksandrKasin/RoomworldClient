import React from "react";
import CardFlat from "./cardFlat";
import axios from "axios";
import {IMG_NOT_FOUND, SERVER} from "../constants/constants";
import Map from "./map";
import {connect} from 'react-redux';
import HousesFilter from "./houseFilter/housesFilter";


class AlbomCardFlat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flats: [],
            skip: 0,
            take: 1,
            found: 0
        }
        this.getFlats();
    }

    countPlaces() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/places/amount', {
            params: {
                country: this.props.searchParams.country,
                city: this.props.searchParams.city,
                dateFrom: this.props.searchParams.dateFrom,
                dateTo: this.props.searchParams.dateTo
            }
        })
            .then((response) => {
                this.setState({found: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getFlats() {
        this.countPlaces();
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/search', {
            params: {
                country: this.props.searchParams.country,
                city: this.props.searchParams.city,
                dateFrom: this.props.searchParams.dateFrom,
                dateTo: this.props.searchParams.dateTo,
                skip: this.state.skip,
                take: this.state.take
            }
        })
            .then((response) => {
                this.setState({flats: this.state.flats.concat(response.data)})
                this.setState({skip: this.state.skip + this.state.take});
            })
            .catch((error) => {
                console.log(error);
            });

    }


    formatDate(date) {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    listFlat() {
        if (this.state.flats.length) {
            return this.state.flats.map((flat, index) => {
                return <CardFlat
                    id={flat.id}
                    key={index}
                    name={flat.name}
                    image={(flat.images.length) ? SERVER + flat.images[0].url : IMG_NOT_FOUND}
                    cardText={flat.description}
                    cost={flat.cost}
                    location={flat.location.country + " " + flat.location.city}
                    date={this.formatDate(new Date(flat.createdDate))}
                />
            })
        }
    }

    stringPlace() {
        let params = this.props.searchParams;
        return (params.city) ? params.country + ", " + params.city : params.country;
    }

    render() {
        return <div className="ml-5 mt-3">

            <HousesFilter/>

            <div className="row">
                <div className="container col-6 container_flex_none container_width_none">
                    <div className="container__title border mb-4 rounded_10 p-2">
                        <h3>{this.stringPlace()}
                            <small className="text-muted">({this.state.found} places
                                found)
                            </small>
                        </h3>
                    </div>
                    <div className="row">
                        {this.listFlat()}
                    </div>
                    <div className="text-center">
                        <button className="btn btn-secondary btn-primary input_size_s w-50 rounded_10" type='button'
                                onClick={() => this.getFlats()}>Show more
                        </button>
                    </div>
                </div>
                <div className="map-sticky-container sticky-top col-5">
                    <Map place={this.props.searchParams.country + ", " + this.props.searchParams.city}/>
                </div>
            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {
        searchParams: state.flatReducer.searchParams,
        page: state.flatReducer.page
    };
}

export default connect(mapStateToProps)(AlbomCardFlat);