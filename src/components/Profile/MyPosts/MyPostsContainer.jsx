import React from 'react';
import MyPosts from './MyPosts.jsx';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {
   
    let state = props.store.getState();

    let addPost = () => {           
        props.store.dispatch(addPostActionCreator());     
    }

    let changeNewPost = (text) => {   
        let action = updatePostActionCreator(text); 
        props.store.dispatch(action);
    }
    
    return ( <MyPosts updateNewPostText = {changeNewPost} addPost = {addPost} 
        posts = {state.profilePage.posts}
        newPostText = {state.profilePage.newPostText}/>
    );
}
export default MyPostsContainer;