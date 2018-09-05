import React from "react";
import AlbomCardFlat from "./AlbomCardFlat";


class Home extends React.Component {
    render() {
        return <div className="find">

            <div className="row">
                <div className="col-md-2 ">
                    <input type="text" className="form-control h1 search" placeholder="Where do you want to go?"/>
                </div>
                <div className="col-md-1">
                    <input type="text" className="form-control search" placeholder="From"/>
                </div>
                <div className="col-md-1">
                    <input type="text" className="form-control search" placeholder="To"/>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-secondary btn-primary search" type='button'>Search
                    </button>

                </div>


            </div>

        </div>

    }
}

export default Home