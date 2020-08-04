import React from 'react';
import { sendActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {       

    return <StoreContext.Consumer>
        { (store) => {
                 let onClickSend = () => {       
                    store.dispatch(sendActionCreator());                
                }

                let onChangeNewMessage = (body) => {       
                    store.dispatch(updateMessageActionCreator(body));                
                }
                return ( <Dialogs onsendAction = {onClickSend} onupdateMessageAction = {onChangeNewMessage}  
                    messagePage = {store.getState().messagePage}/>); 
            }
        }
    </StoreContext.Consumer>
    
};

export default DialogsContainer;