import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    
    let postData = [
        { id: 1, message: 'Hello name Jon', age : 26 ,  likesCounts : 43 },
        { id: 2, message: 'It\'s my first.', age : 24 , likesCounts : 1 },
        { id: 3, message: 'Speak English', age : 871 , likesCounts : 9999 }     
    ];

    let postElements = 
        postData.map( (p) =>  <Post message = {p.message} age = {p.age} count_like = {p.likesCounts} />);

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