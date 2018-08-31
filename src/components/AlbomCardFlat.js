import React from "react";
import CardFlat from "./CardFlat";

class AlbomCardFlat extends React.Component {
    render() {
        return <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <CardFlat/>
                    <CardFlat/>
                    <CardFlat/>
                    <CardFlat/>
                </div>
            </div>
        </div>
    }
}

export default AlbomCardFlat