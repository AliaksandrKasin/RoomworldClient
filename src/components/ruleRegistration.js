import * as React from "react";
import connect from "react-redux/es/connect/connect";
import STORE from "../store";
import RuleRegistration from "./rulesRegistration";
import {addRule} from "../actions/registrationFlat/registrationFlatActions";

class Rules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            houseRule: {name: "", state: true}
        }
    }

    onChangeHouseRulesTitle = (event) => {
        this.setState({houseRule: {name: event.target.value, state: this.state.houseRule.state}})
    }

    onChangeHouseRulesState = (event) => {
        this.setState({houseRule: {state: (event.target.value === "Can"), name: this.state.houseRule.name}})
    }

    listHouseRules = (houseRules) => {
        return houseRules.map((rule, index) => {
            return <RuleRegistration key={index} state={rule.state} text={rule.name}/>
        })
    }

    onClickAddRule = (rule) => {
        if (rule.name.length && this.props.rules.filter(x => x.name === rule.name).length === 0) {
            STORE.dispatch(addRule(rule));
            this.setState({houseRules: {name: "", state: true}})
        }
    }

    render() {
        return <div className="container border rounded_10 mb-3">
            <h4>House Rules</h4>

            {this.listHouseRules(this.props.rules)}

            <div className="row">

                <div className="col-6">
                    <label className="text-muted">Title:</label><br/>
                    <input className="rounded w-100" type="text" onChange={this.onChangeHouseRulesTitle}/>
                </div>

                <div className="col-2">
                    <label className="text-muted">State:</label><br/>
                    <select className="rounded h5 text-muted" onChange={this.onChangeHouseRulesState}>
                        <option>Can</option>
                        <option>Can`t</option>
                    </select>
                </div>

                <div className="col-4 mt-4 text-right mb-4">
                    <button className="btn btn-secondary btn-primary rounded_10"
                            onClick={() => this.onClickAddRule(this.state.houseRule)} type="button">Add rule
                    </button>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        rules: state.registrationFlatReducer.houseRuleses
    };
}

export default connect(mapStateToProps)(Rules);