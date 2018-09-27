import * as React from "react";
import connect from "react-redux/es/connect/connect";
import STORE from "../store";
import addRules from "../actions/addRules";
import rulesInitial from "../actions/rulesInitial";
import RuleRegistration from "./rulesRegistration";

class Rules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            houseRule: {title: "", state: true}
        }

        STORE.dispatch(rulesInitial());
    }

    onChangeHouseRulesTitle = (event) => {
        this.setState({houseRule: {title: event.target.value, state: this.state.houseRule.state}})
    }

    onChangeHouseRulesState = (event) => {
        this.setState({houseRule: {state: (event.target.value === "Can"), title: this.state.houseRule.title}})
    }

    listHouseRules(houseRules) {
        return houseRules.map((rule, index) => {
            return <RuleRegistration key={index} state={rule.state} text={rule.title}/>
        })
    }

    onClickAddRule(rule) {
        if (rule.title !== "" && this.props.rules.filter(x => x.title === rule.title).length === 0) {
            STORE.dispatch(addRules(rule));
            this.setState({houseRules: {title: "", state: true}})
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
        rules: state.flatReducer.houseRuleses
    };
}

export default connect(mapStateToProps)(Rules);