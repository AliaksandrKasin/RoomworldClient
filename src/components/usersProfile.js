import * as React from "react";

class UsersProfile extends React.Component {
    render() {
        return <div className="col-md-9 container-profile">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Profile Information</h4>
                            <hr/>
                        </div>
                    </div>

                    <form>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-4 col-form-label">First Name</label>
                            <div className="col-8">
                                <input id="name" name="name"
                                       className="form-control here"
                                       type="text" value={this.props.name}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="text" className="col-4 col-form-label">Last Name</label>
                            <div className="col-8">
                                <input id="text" name="text"
                                       className="form-control here"
                                       required="required" type="text" value={this.props.surname}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="email" className="col-4 col-form-label">Email</label>
                            <div className="col-8">
                                <input id="email" name="email" className="form-control here"
                                       required="required" type="text" value={this.props.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone-number" className="col-4 col-form-label">Phone Number</label>
                            <div className="col-8">
                                <input id="phone-number" name="phone-number"
                                       className="form-control here"
                                       type="text" value={this.props.phoneNumber}/>
                            </div>
                        </div>
                        <div className="text-right">
                            <button className="btn input_size_s rounded_10 bg-white border">Save Changes</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    }
}

export default UsersProfile;