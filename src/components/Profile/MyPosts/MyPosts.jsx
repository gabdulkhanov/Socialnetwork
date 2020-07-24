import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
    let postElements = 
        props.posts.map( (p) =>  <Post message = {p.message} 
                age = {p.age} count_like = {p.likesCounts} />);

   
   let newPost = React.createRef();

    let addPost = () => {           
        props.dispatch(addPostActionCreator());     
    }

    let changeNewPost = () => {             
        let text = newPost.current.value;
        props.dispatch(updatePostActionCreator(text));
    }
    
    return (
        <div className={s.myposts}>           
            <div>
                New Posts<br/>
                <textarea onChange = { changeNewPost } ref = { newPost } value = { props.newPostText }></textarea>
                <div>
                    <button  onClick = { addPost }>Add post</button>
                </div>
            </div>

            <div className={s.posts}>           
                { postElements }   
            </div>    
        </div>
    );
}
export default MyPosts;