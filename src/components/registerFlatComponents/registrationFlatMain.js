import * as React from "react";
import FlatDetails from "./flatDetails";
import ProgressBar from "../snippet/progressBar";

class RegistrationFlatMain extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        document.body.style.backgroundColor = "#f7f7f8";
    }

    render() {
        return <div className="mt-5">
            <div className="container d-flex justify-content-center mb-5 position-relative">
                <ProgressBar/>
            </div>
            <div className="">
                <FlatDetails/>
            </div>

        </div>
    }
}

export default RegistrationFlatMain;