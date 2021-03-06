import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import store from './redux/store';
import { ContextProvider } from './StoreContext';

let rerenderEntireTree = () => {
    ReactDOM.render( <BrowserRouter>
                        <ContextProvider  store = {store}>
                            <App/>
                        </ContextProvider>
                     </BrowserRouter>, 
    document.getElementById('root') );
}

rerenderEntireTree();

store.subscibe( () => {    
        rerenderEntireTree();
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







