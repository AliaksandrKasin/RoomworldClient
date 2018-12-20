import React from 'react';
import './css/index.css';
import './css/menu/menu.css';
import './css/chat.css';
import './css/datepicker.css';
import './css/profile.css';
import './css/elements.css';
import './css/loading.css';
import './css/filter.css';
import './css/carousel.css';
import './css/account.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import STORE from "./store";
import Menu from "./components/menu/menu";
import Router from "./router";
import ChatContainer from "./components/chatComponents/chatContainer";
import ChatButton from "./components/chatComponents/chatButton";

ReactDOM.render(<Provider store={STORE}>
        <BrowserRouter>
            <div className="app-container">
                <Menu/>
                <main>
                    <Router/>
                    {(localStorage.getItem('accessToken')) && <ChatContainer/>}
                    {(localStorage.getItem('accessToken')) && <ChatButton/>}
                </main>
                <footer>
                </footer>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


