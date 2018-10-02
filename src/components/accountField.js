import * as React from "react";

class AccountField extends React.Component {
    render() {
        return <div className="form-group row">
            <label htmlFor="name" className="col-3 col-form-label h3 text-left">{this.props.title}</label>
            <div className="col-8">
                <input className="form-control here"
                       type="password" required="required"
                       onChange={this.props.onChange}/>
            </div>
        </div>
    }
}

export default AccountField;