import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = 
        props.postData.map( (p) =>  <Post message = {p.message} age = {p.age} count_like = {p.likesCounts} />);

    return (
        <div className={s.myposts}>           
            <div>
                New Posts<br/>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>           
                { postElements }   
            </div>    
        </div>
    );
}
export default MyPosts;