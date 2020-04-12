import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (        
        <div className={s.item_dlg}>
                <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {  
    return (        
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
       <div className = {s.dialogs}>
           <div className={s.dialogsItems}>
                <DialogItem name = "Bob" id="bob"></DialogItem>
                <DialogItem name = "Tod" id="tod"></DialogItem>
                <DialogItem name = "Sveta" id="sveta"></DialogItem>
                <DialogItem name = "Masha" id="masha"></DialogItem>
                <DialogItem name = "Dima" id="dima"></DialogItem>
           </div>
           <div className={s.messages}>               
                <Message message = "Lorem ipsum dolor sit."/>
                <Message message = "Do you speak English?."/>
                <Message message = "Thanks!"/>
                <Message message = "Some message"/>
           </div>
       </div>
    );
}
export default Dialogs;