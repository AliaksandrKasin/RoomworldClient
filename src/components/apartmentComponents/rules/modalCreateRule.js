import * as React from "react";
import Modal from 'react-responsive-modal';
import FormInput from "../../baseComponents/formInput";
import Switch from "react-switch";

class ModalCreateRule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rule: {
                nameRule: "",
                isAllowed: true
            }
        }
    }

    onChangeInput = (value) => {
        this.setState(Object.assign(this.state.rule, {nameRule: value}));
    }

    create = (e) => {
        e.preventDefault();
        this.props.createRule(this.state.rule);
        this.props.onClose();
        this.setState({rule: {nameRule: "", isAllowed: true}});
    }

    render() {
        return <Modal open={this.props.open} onClose={this.props.onClose} center
                      classNames={{modal: "w-30 h-35 d-flex justify-content-center align-items-center"}}>
            <form onSubmit={this.create} className="w-100">
                <div className="container w-100 d-flex justify-content-center align-items-center">
                    <div className="w-100">
                        <h4 className="pb-5">Create rule...</h4>
                        <div>
                            <div className="pb-4">
                                <FormInput placeholder="Type your rule" requered={true} type="text" minLength={5}
                                           maxLength={60}
                                           name="apartmentRates"
                                           value={this.state.rule.nameRule}
                                           onChange={this.onChangeInput}/>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <Switch
                                    onChange={() => this.setState({rule: Object.assign(this.state.rule, {isAllowed: !this.state.rule.isAllowed})})}
                                    checked={this.state.rule.isAllowed}/>
                                <label
                                    className="text-uppercase text-muted h5 pt-2 pl-2">{(this.state.rule.isAllowed) ? "allowed" : "not allowed"}</label>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn-next button-size-s" type='submit'>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    }
}

export default ModalCreateRule;