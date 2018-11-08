import * as React from "react";
import FormInput from "./formInput";

class FlatDetails extends React.Component {
    render() {
        return <div className="d-flex  mt-5 border container ">
            <div className="w-100">
                <div className="p-4">
                    <h4 className="pb-3">Describe your property</h4>
                    <div className="border-bottom w-100">
                    </div>
                </div>


                <FormInput placeholder="Headtitle" min={20} max={100}/>
            </div>
        </div>

    }

}

export default FlatDetails;