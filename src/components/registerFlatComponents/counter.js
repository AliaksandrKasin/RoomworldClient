import * as React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)

class Counter extends React.Component{
    render(){
        return <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
                <div>
                    <i className=" fas fa-angle-up "></i>
                </div>
                <div>
                    <span className="counter-number">1</span>
                </div>
                <div>down</div>
            </div>
        </div>
    }
}

export default Counter;