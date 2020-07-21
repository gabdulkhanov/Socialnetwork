import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { sendActionCreator, updateMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {   

    let state = props.store.getState().messagePage;

    let dialogElements = 
        state.dialogs.map( (d) =>  <DialogItem name = {d.name} id={d.id} />);     

    let messageElements = 
        state.messages.map( m => <Message message = {m.message} likeCount = {m.likesCounts} /> );

    let onClickSend = () => {       
        props.store.dispatch(sendActionCreator());
       
    }

    let onChangeNewMessage = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateMessageActionCreator(body));
       
    }


    return (
       <div className = {s.dialogs}>
           <div className={s.dialogsItems}>                
                { dialogElements}
           </div>
           <div className={s.messages}>               
                { messageElements }  
                <div>  
                    <textarea onChange={onChangeNewMessage} value = { state.newMessageText }></textarea>     
                </div>
                <div>
                    <button onClick={onClickSend}>SEND</button>
                </div>              
           </div>
       </div>
    );
}
export default Dialogs;