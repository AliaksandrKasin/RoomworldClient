import * as React from "react";
import {IMG_NOT_FOUND, SERVER} from "../constants/constants";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.nextImg = this.nextImg.bind(this);
        this.prevImg = this.prevImg.bind(this);
    }

    nextImg() {
        let increment = this.state.counter + 1;
        if (this.props.images.length > increment) {
            this.setState({counter: increment});
        }
    }

    prevImg() {
        let increment = this.state.counter - 1;
        if (increment >= 0) {
            this.setState({counter: increment});
        }
    }

    render() {
        console.log(this.state.counter);
        return <div className="carousel slide mt-3" data-ride="carousel">
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100"
                             src={(this.props.images.length) ? SERVER + this.props.images[this.state.counter].url : "https://www.solidbackgrounds.com/images/1280x720/1280x720-white-solid-color-background.jpg"}
                             alt="First slide"/>
                    </div>

                </div>
            </div>
            <div className="carousel-indicators carousel__page-counter">
                {this.state.counter + 1 + "/" + this.props.images.length}
            </div>
            <button className="carousel-control-prev bg-transparent border-0 cursor-pointer" role="button"
                    data-slide="prev"
                    onClick={this.prevImg}>
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next bg-transparent border-0 cursor-pointer" role="button"
                    data-slide="next"
                    onClick={this.nextImg}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>

        </div>

    }
}

export default Carousel