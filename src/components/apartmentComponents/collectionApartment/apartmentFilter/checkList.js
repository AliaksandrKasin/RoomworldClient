import * as React from "react";
import CheckBox from "./checkBox";

class CheckList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            arrayCheckedBox: []
        }
    }

    onClickCheckBox = (state, title) => {
        (state) ? this.setState({arrayCheckedBox: [...this.state.arrayCheckedBox, title]}) :
            this.setState({arrayCheckedBox: this.state.arrayCheckedBox.filter((value) => value !== title)});
    }

    render() {
        return <div>
            <h5>{this.props.title}</h5>
            {
                this.props.list.map((checkBox, index) => {
                    return <div key={index} className="mt-2"><CheckBox title={checkBox} onClick={this.onClickCheckBox}/>
                    </div>
                })
            }
        </div>
    }
}

export default CheckList;