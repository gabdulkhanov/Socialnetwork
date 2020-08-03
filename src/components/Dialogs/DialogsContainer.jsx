import React from 'react';
import { sendActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {  
   
    let state = props.store.getState().messagePage;   

    let onClickSend = () => {       
        props.store.dispatch(sendActionCreator());
       
    }

    let onChangeNewMessage = (body) => {       
        props.store.dispatch(updateMessageActionCreator(body));
       
    }


    return ( <Dialogs onsendAction = {onClickSend} onupdateMessageAction = {onChangeNewMessage}  
        messagePage = {state}/>); 
};

export default DialogsContainer;