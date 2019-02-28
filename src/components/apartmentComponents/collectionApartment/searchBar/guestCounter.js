import * as React from "react";

class GuestCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            isVisibleSelect: false
        };
        this.counter = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.state.isVisibleSelect && !this.counter.current.contains(event.target)) this.setState({isVisibleSelect: false});
    }

    render() {
        return <div className="guest-container border d-flex justify-content-center align-items-center ml-3"
                    onClick={() => this.setState({isVisibleSelect: !this.state.isVisibleSelect})}>
            <span className="pl-3">{this.state.counter} Guests</span>
            {
                (this.state.isVisibleSelect) &&
                <div ref={this.counter} className="guest-select d-flex align-items-center">
                    <div className="guest-select__arrow"></div>
                    <div className="w-100 ml-3">
                        <span>{this.state.counter} {(this.state.counter < 2) ? "guest" : "guests"}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-end w-100 mr-2">
                        <div className="circle border"
                             onClick={() => (this.state.counter > 1) && this.setState({counter: this.state.counter - 1})}>
                            <span>-</span>
                        </div>
                        <div className="circle border ml-1"
                             onClick={() => (this.state.counter < 50) && this.setState({counter: this.state.counter + 1})}>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    }
}

export default GuestCounter;