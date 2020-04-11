import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
           MyPosts
            <div>
                New Posts<br/>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>           
                <Post message = "Hello name Jon" age="4" count_like="0"/>
                <Post message = "Speak English" age="445" count_like="34"/>
                <Post message = "Elephant" age="29" count_like="7"/>
                
            </div>    
      </div>
    );
}
export default MyPosts;