import * as React from "react";

class UsersProfile extends React.Component {
    render() {
        return <div className="col-md-9 container-profile">
            <div className="d-flex justify-content-center">
                <div className="text-center text-muted">
                    <img src="https://cdn4.iconfinder.com/data/icons/business-men-women-set-1/512/23-512.png"
                         className="avatar rounded-circle img-thumbnail" alt="avatar" height="200px"
                         width="200px"/>
                    <h1 className="profile__title">{this.props.name + " " + this.props.surname}</h1>
                </div>
            </div>
            <div className="container border rounded_10">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Profile Information</h4>
                            <hr/>
                        </div>
                    </div>

                    <form className="">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-3 col-form-label">First Name:</label>
                            <div className="col-8">
                                <input id="name" name="name"
                                       className="form-control here"
                                       type="text" required="required" value={this.props.name}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="text" className="col-3 col-form-label">Last Name:</label>
                            <div className="col-8">
                                <input id="text" name="text"
                                       className="form-control here"
                                       required="required" type="text" value={this.props.surname}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="email" className="col-3 col-form-label">Email:</label>
                            <div className="col-8">
                                <input id="email" name="email" className="form-control here"
                                       required="required" type="text" value={this.props.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone-number" className="col-3 col-form-label">Phone Number:</label>
                            <div className="col-8">
                                <input id="phone-number" name="phone-number"
                                       className="form-control here"
                                       type="text" value={this.props.phoneNumber}/>
                            </div>
                        </div>

                        <div className="text-right mr-5 mt-4">
                            <button onClick={this.changePassword} className="btn btn-lg btn-primary rounded_10"
                                    type='button'>Save Changes
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    }
}

export default UsersProfile;