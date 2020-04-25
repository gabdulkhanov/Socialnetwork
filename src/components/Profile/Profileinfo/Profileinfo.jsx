import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
    return (
        <div>
            <div>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt="nature"/>
            </div>
            <div className={s.item}>
            ava + description
            </div>       
        </div>
    );
}
export default ProfileInfo;