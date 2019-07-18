import React from 'react';
import './css/index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import STORE from "./store";
import Menu from "./components/menu/menu";
import Router from "./router";
import ChatContainer from "./components/chatComponents/chatContainer";
import ChatButton from "./components/chatComponents/chatButton";
import {tokenIsExpired} from "./services/accountServices/tokenService";
import FeedbackContainer from "./components/feedback/feedbackContainer";

ReactDOM.render(<Provider store={STORE}>
        <BrowserRouter>
            <div className="app-container">
                <Menu/>
                <main>
                    <Router/>
                    {(localStorage.getItem('accessToken')) && <ChatContainer/>}
                    <ChatButton/>
                    <FeedbackContainer/>
                </main>
                <footer>
                </footer>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


