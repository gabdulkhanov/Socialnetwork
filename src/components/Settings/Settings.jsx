import React from 'react';
import s from './Settings.module.css';

const Settings = () => {
    return (
       <div className = {s.settings}>
           Настройки
           <textarea>blablabla</textarea>
       </div>
    );
}
export default Settings;