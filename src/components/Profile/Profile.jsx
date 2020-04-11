import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt="nature"/>
            </div>
            <div className={s.item}>
            ava + description
            </div>

            <MyPosts/>
               
      </div>
    );
}
export default Profile;