import * as React from "react";

class OverviewIcons extends React.Component{
    render(){
        return <div className="container-icons__item text-white">
            <img className="container-icons-item__img"
                 src={this.props.img}/>
            <div className="ml-3">
                <strong className="h3">{this.props.strong}</strong>
                <span className="d-block text-uppercase">{this.props.span}</span>
            </div>
        </div>
    }
}

export default OverviewIcons;