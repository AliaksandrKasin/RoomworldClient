import * as React from "react";

class Fasilities extends React.Component{
    render(){
        return <div className=" pl-0">
            <h4>{this.props.title}</h4>
            <div>
                <ul className="amenities border-bottom border-top pl-0 text-muted">
                    {this.props.amenites.map((el)=>{
                        return  <li className="amenity-single">{el}</li>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default Fasilities;