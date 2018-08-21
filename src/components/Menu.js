import React from "react";

class Menu extends React.Component {
    render() {
        return <nav className='navbar'>
            <a className='navbar-brand' href='/support'>Support</a>
            <a className='navbar-brand' href='/registration'>Sing Up</a>
            <a className='navbar-brand' href='/login'>Sing In</a>
        </nav>
    }
}
export default Menu