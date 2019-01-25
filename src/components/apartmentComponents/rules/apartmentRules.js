import * as React from "react";
import RuleSequence from "./ruleSequence";
import ModalCreateRule from "./modalCreateRule";
import connect from "react-redux/es/connect/connect";
import {setApartmentRules} from "../../../actions/apartmentActions/apartmentActions";
import AlertError from "../../alertComponents/alertError";


class ApartmentRules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rulesOfResidence: this.props.apartment.rulesOfResidence || [],
            modalIsOpen: false,
            errorMessage: ""
        };
    }

    componentDidMount = () => {
        let unsubscribe = this.props.history.listen((location, action) => {
            this.props.setApartmentRules(this.state.rulesOfResidence);
            unsubscribe();
        });
    }

    removeRule = (index) => {
        this.setState({rulesOfResidence: [...this.state.rulesOfResidence].filter((el, i) => i !== index)});
    }

    onCloseModal = () => {
        this.setState({modalIsOpen: false});
    }

    addRule = (rule) => {
        let existsRule = this.state.rulesOfResidence.map((rule) => rule.nameRule).indexOf(rule.nameRule);
        (existsRule === -1) ? this.setState({
                rulesOfResidence: [...this.state.rulesOfResidence].concat([rule]),
                errorMessage: ""
            }) :
            this.setState({errorMessage: "This rule already exists!"});
    }

    next = (e) => {
        e.preventDefault();
        if (this.state.rulesOfResidence.length !== 2) {
            this.setState({errorMessage: "Add at least two rules."});
            return;
        }
        this.props.setApartmentRules(this.state.rulesOfResidence);
        this.props.history.push("/apartment/finish")
    }

    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <div className="apartment-title">
                        <h4>Add rules of residence.</h4>
                    </div>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                </div>
                <AlertError message={this.state.errorMessage}/>
                <div className="photo-container mb-5">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <button className="button-upload" type="button"
                                onClick={() => this.setState({modalIsOpen: true})}>
                            <i className="fas fa-check-circle button-upload-icon"></i>
                            <span className="button-upload-title">Create Rule</span>
                        </button>
                    </div>
                </div>
                {
                    (!!this.state.rulesOfResidence.length) &&
                    <div className="w-100 mb-4 d-flex flex-wrap justify-content-center pb-4 bg-light">
                        {
                            this.state.rulesOfResidence.map((rule, index) => {
                                return <RuleSequence key={index} isAllowed={rule.isAllowed} nameRule={rule.nameRule}
                                                     removeRule={() => this.removeRule(index)}/>
                            })
                        }
                    </div>
                }
                <div className="row m-0 flex-nowrap mt-5 mb-5">
                    <div className="text-left col-sm">
                        <button className="btn-back button-size-s" type='button'
                                onClick={() => this.props.history.push('/apartment/rates')}>Back
                        </button>
                    </div>
                    <div className="text-right col-sm">
                        <button className="btn-next button-size-s" type='submit'>Next</button>
                    </div>
                </div>
            </form>
            <ModalCreateRule open={this.state.modalIsOpen} onClose={this.onCloseModal} createRule={this.addRule}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        apartment: state.apartmentReducer.apartment
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setApartmentRules: rules => {
            dispatch(setApartmentRules(rules));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentRules);