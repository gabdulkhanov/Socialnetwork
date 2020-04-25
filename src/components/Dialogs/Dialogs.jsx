import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {   

    let dialogElements = 
        props.dialogData.map( (d) =>  <DialogItem name = {d.name} id={d.id} />);     

    let messageElements = 
        props.messageData.map( m => <Message message = {m.message} likeCount = {m.likesCounts} /> );

    return (
       <div className = {s.dialogs}>
           <div className={s.dialogsItems}>                
                { dialogElements}
           </div>
           <div className={s.messages}>               
                { messageElements }                
           </div>
       </div>
    );
}
export default Dialogs;