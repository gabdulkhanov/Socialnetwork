
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    { id: 1, message: 'Hello name Jon', age : 26 ,  likesCounts : 43 },
    { id: 2, message: 'It\'s my first.', age : 24 , likesCounts : 1 },
    { id: 3, message: 'Speak English', age : 871 , likesCounts : 9999 }     
];

let dialogData = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Mark' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Julia' },
    { id: 5, name: 'Fred' }
];

let messageData = [
    { id: 1, message: 'Возможно.', likesCounts : 43 },
    { id: 2, message: 'Do you speak English?.', likesCounts : 0 },
    { id: 3, message: 'Thanks!' , likesCounts : 67 },
    { id: 4, message: 'Yo Yo Yo' , likesCounts : 75},
    { id: 5, message: 'Some message' , likesCounts : 3 }
];

ReactDOM.render(<App postData = {postData} dialogData={dialogData} messageData={messageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
