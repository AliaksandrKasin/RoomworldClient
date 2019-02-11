import React from "react";
import {Link} from "react-router-dom";

class PageNotFound extends React.Component {
    render() {
        return <div className='text-center page-not-fount d-flex justify-content-center align-items-center'>
            <div>
                <h2 className="text-white font-weight-normal text-uppercase">Error</h2>
                <h1 className="text-white display-1 font-weight-bold error-number">404</h1>
                <h4 className="error-page-title">Sometimes getting lost isn't that bad.</h4>
                <Link to='/'><button className="btn-back text-muted mt-5">Back to home</button></Link>
            </div>
        </div>
    }
}
export default PageNotFound