import * as React from "react";
import Modal from "react-responsive-modal";
import PriceSlider from "./priceSlider";
import CounterAmenitiesSmall from "./counterAmenitiesSmall";

class FiltersModalApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxCost: null,
            minCost: null,
            amountBathrooms: null,
            amountBedrooms: null
        }
    }

    clearFilters = () => {
        let clearFilters = {
            maxCost: null,
            minCost: null,
            amountBathrooms: null,
            amountBedrooms: null
        };
        this.setState(clearFilters);
        this.props.onClickDone(null, clearFilters);
        this.props.onClose();
    }

    render() {
        return <Modal styles={styles} open={this.props.open} onClose={this.props.onClose} center>
            <div className="mb-5">
                <div className="d-flex align-items-center mb-4 ml-2">
                    <img className="img_size_4"
                         src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                    <h4 className="ml-2 font-weight-normal">Room World Filters</h4>
                </div>
                <div className="filters-block d-flex justify-content-center flex-wrap">
                    <div className="mt-5">
                        <PriceSlider maxCost={1000} minCost={0} step={10} maxValue={this.state.maxCost}
                                     minValue={this.state.minCost} onChange={(value) => this.setState({
                            maxCost: value.maxCost,
                            minCost: value.minCost
                        })}/>
                        <div className="mt-5">
                            <CounterAmenitiesSmall title="Bathrooms"
                                                   value={this.state.amountBathrooms}
                                                   onChange={(value) => this.setState({amountBathrooms: value})}/>
                            <CounterAmenitiesSmall title="Bedrooms"
                                                   value={this.state.amountBedrooms}
                                                   onChange={(value) => this.setState({amountBedrooms: value})}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="">
                    <button className="text-uppercase btn-modal btn-modal_color_white" type='button'
                            onClick={this.clearFilters}>
                        Clear filters
                    </button>
                </div>
                <div className="ml-5">
                    <button className="text-uppercase btn-modal btn-modal_color_black" type='button'
                            onClick={() => this.props.onClickDone(null, this.state)}>Done
                    </button>
                </div>
            </div>
        </Modal>
    }
}

const styles = {
    modal: {
        marginRight: "0px",
        height: "100%",
        maxWidth: "550px",
        overflow: "auto",
    },
    overlay: {
        padding: "0px",
        height: "100%",
        overflow: "hidden",
        background: "rgba(0, 0, 0, 0.49)"
    }
};

export default FiltersModalApartment;