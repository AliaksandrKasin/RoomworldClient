import * as React from "react";

class Carousel extends React.Component {
    render() {
        return <div className="carousel slide mt-3" data-ride="carousel">

            <div  className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100"
                             src="http://s1.1zoom.me/b4856/486/Switzerland_Mountains_Roads_Grasslands_Houses_517910_1920x1080.jpg"
                             alt="First slide"/>
                    </div>

                </div>
            </div>
            <div className="carousel-indicators carousel__page-counter">
                1/18
            </div>
            <a className="carousel-control-prev"  role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>

    }
}

export default Carousel