import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import store from './redux/store';


let rerenderEntireTree = () => {
    ReactDOM.render( <App state = {store.getState()} 
                    dispatch = {store.dispatch.bind(store)} store = {store}/>, 
                    document.getElementById('root') );
}

rerenderEntireTree(store.getState());
store.subscibe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







