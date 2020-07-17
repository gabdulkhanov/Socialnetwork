import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import state, { subscibe, addPost, updateNewPost } from './redux/state';


let rerenderEntireTree = (state) => {
    ReactDOM.render( <App state = {state} 
                    addPost = {addPost} 
                    updateNewPost = {updateNewPost}/>, 
                    document.getElementById('root') );
}

rerenderEntireTree(state);
subscibe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







