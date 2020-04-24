import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogData = [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Mark' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Julia' },
        { id: 5, name: 'Fred' }
    ];

    let dialogElements = 
        dialogData.map( (d) =>  <DialogItem name = {d.name} id={d.id} />);        

    let messageData = [
        { id: 1, message: 'Возможно.', likesCounts : 43 },
        { id: 2, message: 'Do you speak English?.', likesCounts : 0 },
        { id: 3, message: 'Thanks!' , likesCounts : 67 },
        { id: 4, message: 'Yo Yo Yo' , likesCounts : 75},
        { id: 5, message: 'Some message' , likesCounts : 3 }
    ];

    let messageElements = 
        messageData.map( m => <Message message = {m.message} likeCount = {m.likesCounts} /> );

    return (
       <div className = {s.dialogs}>
           <div className={s.dialogsItems}>                
                { dialogElements }
           </div>
           <div className={s.messages}>               
                { messageElements }                
           </div>
       </div>
    );
}
export default Dialogs;