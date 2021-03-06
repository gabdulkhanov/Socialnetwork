import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = 
        props.posts.map( (p) =>  <Post message = {p.message} 
                age = {p.age} count_like = {p.likesCounts} />);

   
   let newPost = React.createRef();

    let onaddPost = () => {           
        props.addPost();   
    }

    let onchangeNewPost = () => {             
        let text = newPost.current.value;
        props.updateNewPostText(text);
        
    }
    
    return (
        <div className={s.myposts}>           
            <div>
                New Posts<br/>
                <textarea onChange = { onchangeNewPost } ref = { newPost } value = { props.newPostText }></textarea>
                <div>
                    <button  onClick = { onaddPost }>Add post</button>
                </div>
            </div>

            <div className={s.posts}>           
                { postElements }   
            </div>    
        </div>
    );
}
export default MyPosts;