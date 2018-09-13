import * as React from "react";

class Account extends React.Component{
    render(){
        return <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Account</h4>
                        <hr/>
                    </div>
                </div>
                <div className="col-md-8">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-4 col-form-label">Current password</label>
                            <div className="col-8">
                                <input id="name" name="name"
                                       className="form-control here"
                                       type="text" value={this.props.name}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="text" className="col-4 col-form-label">Password</label>
                            <div className="col-8">
                                <input id="text" name="text"
                                       className="form-control here"
                                       required="required" type="text" value={this.props.surname}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="email" className="col-4 col-form-label">Confirm password</label>
                            <div className="col-8">
                                <input id="email" name="email" className="form-control here"
                                       required="required" type="text" value={this.props.email}/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    }
}

export default Account;