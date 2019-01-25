import * as React from "react";

class RuleSequence extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgCross: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/close-512.png",
            imgCheckMark: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/check-512.png"
        }
    }

    render() {
        return <div className="mt-2 mb-4 p-4 border-bottom w-100">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center w-100">
                    <img className="img_size_4 mr-2"
                         src={(this.props.isAllowed) ? this.state.imgCheckMark : this.state.imgCross}/>
                    <div className="w-100 text-muted h5 text-uppercase m-0">
                        {this.props.nameRule}
                    </div>
                </div>
                <div className="text-right text-info d-flex justify-content-end" onClick={this.props.removeRule}>remove</div>
            </div>
        </div>
    }
}

export default RuleSequence;