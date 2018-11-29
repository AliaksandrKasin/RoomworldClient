import * as React from "react";
import 'react-rangeslider/lib/index.css'
import ReactSlider from "react-slider"

class HousesFilter extends React.Component {

    constructor(props){
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
        let cost = "$"+ this.state.minCost + "- $" + this.state.maxCost + " avg/night";
        return <div>
            <div className="mb-4 h5">
                <span>{(this.state.minCost === 0 && this.state.maxCost === 1000) ? "Any Price avg/night" : cost}</span>
            </div>
            <ReactSlider withBars min={0} max={1000} step={10} onChange={this.onChangeCost}>
                <div className="my-handle"></div>
                <div className="my-handle"></div>
            </ReactSlider>
        </div>
    }
}

export default HousesFilter;