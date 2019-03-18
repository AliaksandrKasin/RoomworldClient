import * as React from "react";
import Modal from "react-responsive-modal";
import FormTextArea from "../baseComponents/formTextArea";
import {sendFeedback} from "../../services/feedbackService/feedbackService";
import AlertError from "../alertComponents/alertError";

class ModalFeedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: -1,
            feedback: "",
            errorMessage: "",
            isSend: false
        }
    }

    displayChoiceBtn = () => {
        let arrayButtons = [];
        for (let i = 0; i < 11; i++) {
            arrayButtons.push(<button
                className={(this.state.rating === i) ? "btn-choice border btn-choice-checked" : "btn-choice border"}
                onClick={() => this.setState({rating: i})}
                key={i}
                type="button">{i}</button>)
        }
        return arrayButtons;
    }

    sendFeedback = (e) => {
        e.preventDefault();
        if (this.state.rating < 0) {
            this.setState({errorMessage: "Please select number of rating"});
            return;
        }
        sendFeedback(this.state.feedback, this.state.rating)
            .then((responce) => {
                this.setState({rating: -1, feedback: "", errorMessage: "", isSend: true});
            })
            .catch((error) => {
                this.setState({errorMessage: error.message})
            })
    }

    onClickButtonOk = () => {
        this.props.onClose();
        this.setState({isSend: false});
    }

    render() {
        return <Modal open={this.props.open} onClose={this.props.onClose} center>
            <form onSubmit={this.sendFeedback} className="container-modal-feedback">
                <div className="d-flex align-items-center ml-2">
                    <img className="img_size_4"
                         src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/06-twitter-512.png"/>
                    <h3 className="ml-2 font-weight-normal">Feedback</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    {
                        (!this.state.isSend) ? <div className="w-100">
                                <AlertError message={this.state.errorMessage}/>
                                <h5>Please tell us what you think of our website below.</h5>
                                <div className="mt-4">
                                    <FormTextArea placeholder="Feedback" minLength={20}
                                                  maxLength={100000} required={true}
                                                  onChange={(value) => this.setState({feedback: value})}
                                                  value={this.state.feedback}/>
                                </div>
                                <div className="mb-3 mt-4">
                            <span
                                className="h6">How likely are you to recommend our website to a friend or colleague?</span>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    {this.displayChoiceBtn()}
                                </div>
                                <div className="d-flex justify-content-end align-items-center mt-4">
                                    <button className="feedback-modal__btn border">Send</button>
                                </div>
                            </div> :
                            <div className="text-center">
                                <i className="fas fa-check text-center feedback-check-icon mb-5"></i>
                                <h4>Thank you for your feedback</h4>
                                <div className="d-flex justify-content-center align-items-end mt-5">
                                    <button className="feedback-modal__btn border" type="button"
                                            onClick={this.onClickButtonOk}>Ok
                                    </button>
                                </div>
                            </div>
                    }
                </div>
            </form>
        </Modal>
    }
}

export default ModalFeedback;