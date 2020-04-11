import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (        
            <div className={s.item}>
                <img src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" alt="ava"/> 
                {props.message}, {props.age}             
                <div>
                    <span>like {props.count_like} </span>
                </div>    
            </div>    
    );
}
export default Post;