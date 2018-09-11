import * as React from "react";

class Rules extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            imgCross: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/close-512.png",
            imgCheckMark: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/check-512.png"
        }
    }
    render(){
        return <div className="mt-2 mr-3 mb-4 p-4 border-bottom">
                <img className="img-small-2 mr-5"
                     src={(this.props.state) ? this.state.imgCheckMark : this.state.imgCross}/>
                <small className="text-muted h5">{this.props.text}</small>
            </div>
    }
}

export default Rules;