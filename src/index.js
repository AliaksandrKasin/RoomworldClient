import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from '../node_modules/react-router-dom'
import NotFound from './components/notFound'
import Menu from './components/menu'
import Footer from "./components/footer";


ReactDOM.render(<div className="body">
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Menu}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        </BrowserRouter>
    <Footer/>
    </div>,
    document.getElementById('root')
);


