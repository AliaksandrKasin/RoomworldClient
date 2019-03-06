import * as React from "react";

class Teaser extends React.Component{
    render(){
        return <div className="teaser-content-block p-2 position-relative text-center">
            <img className="teaser__img img-fluid"
                 src={this.props.img}/>
            <div className="teaser-description">
                <span className="text-uppercase teaser-description__title">{this.props.title}</span>
                <p className="teaser-description__paragraph pt-3">{this.props.description}</p>
            </div>
        </div>
    }
}

export default Teaser;