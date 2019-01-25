import * as React from "react";
import TimeInput from "material-ui-time-picker";

class FormTimePicker extends React.Component{
    render(){
        return <div className="border">

            <TimeInput mode='12h' placeholder="Check in time"/>
        </div>
    }
}
export default FormTimePicker;