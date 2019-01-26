import React from "react";
import SearchBlock from "./searchBlock";



class Home extends React.Component {

    render() {
        return <div>
            <SearchBlock history={this.props.history}/>
        </div>

    }
}

export default Home