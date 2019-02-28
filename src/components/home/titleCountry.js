import * as React from "react";

const arrayCities = ["Paris", "Minsk", "Berlin", "Frankfurt", "Grodno", "London"];

class TitleCountry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCity: "",
            arrayIndex: 0,
            countryIndex: 0
        }
    }

    writeCityByLetters = () => {
        this.setState({
            currentCity: this.state.currentCity + arrayCities[this.state.arrayIndex][this.state.countryIndex],
            countryIndex: this.state.countryIndex + 1
        });
        if (this.state.countryIndex === arrayCities[this.state.arrayIndex].length) {
            clearInterval(this.timerID);
            setTimeout(this.eraseCity, this.props.timeout);
        }
    }

    eraseCity = () => {
        this.eraseInterval = setInterval(() => {
            this.setState({
                currentCity: this.state.currentCity.substr(0, this.state.currentCity.length - 1),
                countryIndex: this.state.countryIndex - 1
            });
            if (this.state.countryIndex === 0) {
                this.setState({arrayIndex: (this.state.arrayIndex + 1 === arrayCities.length) ? 0 : this.state.arrayIndex + 1});
                clearInterval(this.eraseInterval);
                this.timerID = setInterval(this.writeCityByLetters, this.props.speadWrite);
            }
        }, this.props.speadErase);
    }

    componentDidMount = () => {
        this.timerID = setInterval(this.writeCityByLetters, this.props.speadWrite);
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID);
    }

    render() {
        return <React.Fragment>
             <span
                 className="text-white text-center search-title search-animation-city ml-3 animation-city-border-b">in {this.state.currentCity}</span>
            <span className="blinking-cursor">|</span>
        </React.Fragment>
    }
}

export default TitleCountry;