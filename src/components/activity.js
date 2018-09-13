import * as React from "react";

class Activity extends React.Component{
    render(){
        return  <ul className="list-group">
            <li className="list-group-item text-muted">Activity</li>
            <li className="list-group-item text-left"><span
                className="pull-left"><strong>My flats: </strong></span> {this.props.flats}
            </li>
            <li className="list-group-item text-left"><span
                className="pull-left"><strong>Rented flats: </strong></span> 0
            </li>
            <li className="list-group-item text-left"><span
                className="pull-left"><strong>Messages: </strong></span> 0
            </li>
        </ul>
    }
}

export default Activity;