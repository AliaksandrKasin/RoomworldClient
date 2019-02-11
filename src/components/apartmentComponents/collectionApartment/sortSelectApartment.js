import * as React from "react";

class SortSelectApartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
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

    onClickItem = () => {
        this.setState({isOpen: false});
    }

    render() {
        return <div ref={this.block} className="h-100">
            <button className="btn-sort"
                    onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                <span>Sort</span>
                <i className={(!this.state.isOpen) ? "fas fa-angle-down btn-sort-icon" : "fas fa-angle-down btn-sort-icon btn-sort-icon-active"}></i>
            </button>
            {
                (this.state.isOpen) && <div className={(!this.state.isOpen) ? "sort-select border" : "sort-select border sort-select-open"}>
                    <div className="sort-select-item" onClick={this.onClickItem}>Price: Low to High</div>
                    <div className="sort-select-item" onClick={this.onClickItem}>Price: High to Low</div>
                    <div className="sort-select-item" onClick={this.onClickItem}>Guest Rating</div>
                    <div className="sort-select-item" onClick={this.onClickItem}>Bedrooms: Fewest to Most</div>
                    <div className="sort-select-item" onClick={this.onClickItem}>Bedrooms: Most to Fewest</div>
                </div>
            }
        </div>
    }
}

export default SortSelectApartment;