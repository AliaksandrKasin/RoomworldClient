import * as React from "react";
import Modal from "react-responsive-modal";
import FormInput from "../baseComponents/formInput";
import FormTextArea from "../baseComponents/formTextArea";

class ModalFeedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnCheck: -1
        }
    }

    displayChoiceBtn = () => {
        let arrayButtons = [];
        for (let i = 0; i < 11; i++) {
            arrayButtons.push(<button
                className={(this.state.btnCheck === i) ? "btn-choice border btn-choice-checked" : "btn-choice border"}
                onClick={() => this.setState({btnCheck: i})}>{i}</button>)
        }
        return arrayButtons;
    }

    render() {
        return <Modal open={this.props.open} onClose={this.props.onClose} center>
            <div className="container-modal-feedback">
                <div className="d-flex align-items-center ml-2">
                    <img className="img_size_4"
                         src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                    <h3 className="ml-2 font-weight-normal">Feedback</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                        <div>
                            <div className="mb-3">
                                <FormInput placeholder="Email"/> {/*If not authorize*/}
                            </div>
                            <FormTextArea placeholder="Feedback"/>
                        </div>
                        <div className="mb-3 mt-3">
                            <span className="h6">How likely are you to recommend our website to a friend or colleague?</span>
                        </div>
                        {this.displayChoiceBtn()}

                        <div className="d-flex justify-content-end align-items-center mt-4">
                            <button className="feedback-modal__btn border">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    }
}

export default ModalFeedback;