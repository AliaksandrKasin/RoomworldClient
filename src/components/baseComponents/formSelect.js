import * as React from "react";

class FormSelect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    render() {
        return <div>
            <div className="text-right bg-white ">
                <label className="label select-placeholder">{this.props.placeholder}</label>
                <select className="input border input-small form-select pb-0">
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>House</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                </select>
            </div>
        </div>
    }
}

export default FormSelect;