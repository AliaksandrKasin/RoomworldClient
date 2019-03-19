import * as React from "react";
import {setSearchParamsSort} from "../../../actions/apartmentActions/apartmentActions";
import connect from "react-redux/es/connect/connect";

class SortSelectApartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selected: sortSelect[0]
        };
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

    onClickItem = (item) => {
        if (this.state.selected !== item) {
            this.setState({isOpen: false, selected: item});
            this.props.setSearchParamsSort(item);
            this.props.onSelect();
        }

    }

    render() {
        return <div ref={this.block} className="h-100">
            <button className="btn-sort"
                    onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                <span>{this.state.selected.name}</span>
                <i className={(this.state.isOpen) ? "fas fa-angle-down btn-sort-icon btn-sort-icon-active" : "fas fa-angle-down btn-sort-icon"}></i>
            </button>
            {
                (this.state.isOpen) &&
                <div className={(this.state.isOpen) ? "sort-select border sort-select-open" : "sort-select border"}>
                    {
                        sortSelect.map((item, index) => {
                            return <div className="sort-select-item" onClick={() => this.onClickItem(item)} key={index}>
                                {item.name}
                            </div>
                        })
                    }
                </div>
            }
        </div>
    }
}

const sortSelect = [
    {name: "Sort", type: null, direction: true},
    {name: "Price: Low to High", type: "price", direction: true},
    {name: "Price: High to Low", type: "price", direction: false},
    {name: "Guest Rating", type: "rating", direction: true},
    {name: "Bedrooms: Fewest to Most", type: "bedrooms", direction: true},
    {name: "Bedrooms: Most to Fewest", type: "bedrooms", direction: false}
];

function mapStateToProps(state) {
    return {
        searchParams: state.apartmentReducer.searchParams,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchParamsSort: details => {
            dispatch(setSearchParamsSort(details));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortSelectApartment);