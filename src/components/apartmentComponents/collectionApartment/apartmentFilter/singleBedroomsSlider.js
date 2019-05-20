import React, {Component} from "react";
import CounterAmenitiesSmall from "./counterAmenitiesSmall";

class SingleBedroomsSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            amountBedrooms: 0
        }
        this.block = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (!this.block.current.contains(event.target)) {
            this.setState({isOpen: false});
        }
    }

    render() {
        return (
            <div ref={this.block}>
                <button className="btn-sort btn-sort_first" type="button"
                        onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                    <span>Bedrooms</span>
                    <i className={this.state.isOpen ? "fas fa-angle-down btn-sort-icon btn-sort-icon-active" : "fas fa-angle-down btn-sort-icon"}></i>
                </button>
                {
                    this.state.isOpen &&
                    <div className="position-absolute bg-white price-filter">
                        <div className="m-2 mb-4 d-flex justify-content-center">
                            <CounterAmenitiesSmall title="Bedrooms"
                                                   value={this.state.amountBedrooms}
                                                   onChange={(value) => this.setState({amountBedrooms: value})}/>
                        </div>
                        <div className="d-flex justify-content-end mr-3">
                            <button type="button" className="btn-modal_small"
                                    onClick={() => this.props.onClickDone(null, this.state)}>Apply
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default SingleBedroomsSelect;