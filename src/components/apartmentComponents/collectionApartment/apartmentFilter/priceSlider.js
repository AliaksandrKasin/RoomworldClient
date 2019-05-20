import ReactSlider from "react-slider"
import React, {Component} from "react";

class PriceSlider extends React.Component {
    onChangeCost = (value) => {
        this.setState({minCost: value[0], maxCost: value[1]});
        if (typeof this.props.onChange === 'function') {
            this.props.onChange({minCost: value[0], maxCost: value[1]});
        }
    }

    render() {
        let minvalue = this.props.minValue || this.props.minCost;
        let maxValue = this.props.maxValue || this.props.maxCost;
        let maxCost = (maxValue === this.props.maxCost && minvalue !== this.props.minCost) ? maxValue + "+" : maxValue;
        let cost = "$" + minvalue + "- $" + maxCost + " avg/night";
        return (
            <div className="filter-container-price">
                <div className="mb-4 h5">
                    <span>{(minvalue === this.props.minCost &&maxValue === this.props.maxCost) ? "Any Price avg/night" : cost}</span>
                </div>
                <ReactSlider value={[minvalue, maxValue]} withBars min={this.props.minCost}
                             max={this.props.maxCost} step={this.props.step}
                             onChange={this.onChangeCost}>
                    <div className="my-handle"></div>
                    <div className="my-handle my-handle-right"></div>
                </ReactSlider>
            </div>
        );
    }
}

export default PriceSlider;