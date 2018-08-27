import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from '../node_modules/react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'


ReactDOM.render(<div>

        <BrowserRouter>
            <Switch>
                <Route path='/' component={Menu}/>
                <Route path='*' exact={true} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);


