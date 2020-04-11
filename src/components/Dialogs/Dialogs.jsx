import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
       <div className = {s.dialogs}>
           <div className={s.dialogsItems}>
                <div className={s.item_dlg}>Bob</div>
                <div className={s.item_dlg}>Tod</div>
                <div className={s.item_dlg + " " + s.active}>Sveta</div>
                <div className={s.item_dlg}>Dima</div>
                <div className={s.item_dlg}>Selena</div>
           </div>
           <div className={s.messages}>
                <div className={s.message}>Lorem ipsum dolor sit amet.</div>
                <div className={s.message}>Lorem, ipsum dolor.</div>
                <div className={s.message}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea.</div>
                <div className={s.message}>Lorem ipsum dolor sit amet consectetur.</div>
           </div>
       </div>
    );
}
export default Dialogs;