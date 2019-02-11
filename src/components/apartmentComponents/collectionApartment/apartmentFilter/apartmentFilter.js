import * as React from "react";
import 'react-rangeslider/lib/index.css'
import ReactSlider from "react-slider"
import CounterAmenitiesSmall from "./counterAmenitiesSmall";
import CheckList from "./checkList";

const listAmenities = ["Pool", "Internet/WiFi", "Air conditioning", "TV", "Dishwasher"];

class ApartmentFilter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minCost: 0,
            maxCost: 1000
        }
    }

    onChangeCost = (value) => {
        this.setState({minCost: value[0], maxCost: value[1]});
    }

    render() {
        let cost = "$" + this.state.minCost + "- $" + this.state.maxCost + " avg/night";
        return <div className="mb-5">
            <div className="d-flex align-items-center mb-4 ml-2">
                <img className="img_size_4"
                     src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                <h4 className="ml-2 font-weight-normal">Room World Filters</h4>
            </div>
            <div className="m-4">
                <div className="row d-flex flex-wrap">
                    <div className="col-sm-3 mt-5">
                        <div className="filter-container-price">
                            <div className="mb-4 h5">
                                <span>{(this.state.minCost === 0 && this.state.maxCost === 1000) ? "Any Price avg/night" : cost}</span>
                            </div>
                            <ReactSlider withBars min={0} max={1000} step={10} onChange={this.onChangeCost}>
                                <div className="my-handle"></div>
                                <div className="my-handle"></div>
                            </ReactSlider>
                        </div>
                        <div className="mt-5">
                            <CounterAmenitiesSmall title="Bathrooms"/>
                            <CounterAmenitiesSmall title="Bedrooms"/>
                        </div>
                    </div>
                    <div className="col-sm d-flex align-items-center flex-wrap">
                        <div className="ml-5 mt-5">
                            <CheckList title="Features & amenities" list={listAmenities}/>
                        </div>

                        <div className="ml-5 mt-5">
                            <CheckList title="Features & amenities" list={listAmenities}/>
                        </div>
                        <div className="ml-5 mt-5">
                            <CheckList title="Features & amenities" list={listAmenities}/>
                        </div>

                        <div className="ml-5 mt-5">
                            <CheckList title="Features & amenities" list={listAmenities}/>
                        </div>
                        <div className="ml-5 mt-5">
                            <CheckList title="Features & amenities" list={listAmenities}/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-5">
                    <div className="mr-3">
                        <button className="btn-back" type='button'>Clear</button>
                    </div>
                    <div className="">
                        <button className="btn-next" type='button'>Show</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ApartmentFilter;