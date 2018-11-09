import * as React from "react";
import FormInput from "./formInput";
import FormTextArea from "./formTextArea";

class FlatDetails extends React.Component {

    onChangeHeadTitle = (value) => {

    }

    render() {
        return <div className="d-flex  mt-5 border container ">
            <div className="w-100">
                <div className="p-4">
                    <h4 className="pb-3">Describe your property</h4>
                    <div className="border-bottom w-100">
                    </div>
                </div>

                <FormInput placeholder="Headtitle" min={20} max={100}/>
                <FormTextArea placeholder="Property description" min={400} max={100000}/>
                <div className="row m-0">
                    <div className="col-sm-6">
                        <FormInput placeholder="Accommodates" value={1} type="number"/>
                    </div>
                    <div className="col-sm-6">
                        <FormInput placeholder="Size" value={1} type="number"/>
                    </div>
                </div>
                <div className="border-bottom w-100 mb-3">
                </div>
                <div className="row m-0 mb-3">
                    <div className="text-left col-sm-6">
                        <button className="btn-back" type='button'>Back</button>
                    </div>
                    <div className="text-right col-sm-6">
                        <button className="btn-next" type='button'>Next</button>
                    </div>
                </div>
            </div>
        </div>

    }

}

export default FlatDetails;