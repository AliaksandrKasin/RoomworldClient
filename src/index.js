import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from '../node_modules/react-router-dom'
import NotFound from './components/notFound'
import Menu from './components/menu'
import Footer from "./components/footer";
import ChatContainer from "./components/chatComponents/chatContainer";
import ChatButton from "./components/chatComponents/chatButton";
import STORE from "./store";
import Provider from "react-redux/es/components/Provider";
import NavigationPanel from "./components/navigation/navigationPanel";


ReactDOM.render(<div className="body">
        <Provider store={STORE}>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Menu}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </BrowserRouter>
                {(localStorage.getItem('accessToken')) ?<ChatContainer/> : null}
                {(localStorage.getItem('accessToken')) ?<ChatButton/> : null}
                <Footer/>
            </div>
        </Provider>
    </div>,
    document.getElementById('root')
);


