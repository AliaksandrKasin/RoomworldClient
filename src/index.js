import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from '../node_modules/react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Menu from './components/Menu'
import NotFound from './components/NotFound'


ReactDOM.render(<div>
        <Menu/>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/registration' component={Registration}/>
                <Route path='*' exact={true} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);


