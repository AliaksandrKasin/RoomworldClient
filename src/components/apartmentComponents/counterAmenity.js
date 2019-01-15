import * as React from "react";
import Counter from "./counter";

class CounterAmenity extends React.Component {
    render() {
        return <div className="d-flex justify-content-center">
            <div className="container-amenity"></div>
            <div className="text-center d-flex align-items-center mr-5 col-sm-4">
                <div className="cover">
                    <h1 className="text-white">See how much you could earn!</h1>
                </div>
            </div>
            <div className="counter col-sm-4">
                <div className="bg-white container-counter">
                    <h3 className="text-center pt-4 mb-5 counter-title">Let's start with the basics</h3>
                    <div className="row ml-2">
                        <div className="col-sm mt-3 text-center">
                            <div>
                                <img className="img_size_4"
                                     src="https://cdn3.iconfinder.com/data/icons/furniture-vector-line-1/128/22-128.png"/>
                            </div>
                            <span>Bedrooms</span>
                            <Counter/>
                        </div>
                        <div className="container-line border-right"></div>
                        <div className="col-sm mt-2 text-center">
                            <div>
                                <img className="img_size_5"
                                     src="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-52-512.png"/>
                            </div>
                            <span>Bathrooms</span>
                            <Counter/>
                        </div>
                    </div>
                    <div className="text-center ml-2 mt-4 pb-5">
                        <button className="btn-next" type='button' onClick={() => this.props.history.push('/apartment/details')}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CounterAmenity;