import * as React from "react";

class Footer extends React.Component {
    render() {
        return <footer className="page-footer font-small unique-color-dark pt-4">
            <div className="container">
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Register</h5>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="btn btn-outline-white btn-rounded">Sign up!</a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
            </div>
        </footer>

    }
}

export default Footer