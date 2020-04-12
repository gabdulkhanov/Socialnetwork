import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div className={s.profileinfo}>           
            <div>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt="nature"/>
            </div>
            <div className={s.item}>
                ava + description 
            </div>           
      </div>
    );
}
export default Profileinfo;