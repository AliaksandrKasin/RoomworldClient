import * as React from "react";
import {Link} from "react-router-dom";

class AdminMenu extends React.Component{
    render(){
        return <div>
            <nav className='mb-3 border-bottom profile-menu'>
                <div className="mb-1 ml-5">
                    <Link to='/admin/statistics'
                          className={(document.location.pathname === '/admin/statistics')
                              ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Statistics</Link>
                    <Link to='/admin/users'
                          className={(document.location.pathname === '/admin/users')
                              ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Users</Link>
                    <Link to='/admin/houses/type' className={(document.location.pathname === '/admin/houses/type')
                        ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Types of housing</Link>
                    <Link to='/admin/consult'
                          className={(document.location.pathname === '/admin/consult')
                              ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Consult</Link>
                    <Link to='/admin/feedbacks'
                          className={(document.location.pathname === '/admin/feedbacks')
                              ? 'navbar-brand profile-menu__link profile-menu__active' : 'navbar-brand profile-menu__link'}>Feedbacks</Link>
                </div>
            </nav>
        </div>
    }
}

export default AdminMenu;