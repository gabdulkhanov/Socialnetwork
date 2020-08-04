import React from 'react';
import MyPosts from './MyPosts.jsx';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext.js';

const MyPostsContainer = () => { 
    
    return <StoreContext.Consumer>
        {  (store) => {
                let addPost = () => {           
                    store.dispatch(addPostActionCreator());     
                }

                let changeNewPost = (text) => {   
                    let action = updatePostActionCreator(text); 
                    store.dispatch(action);
                }
            
                return ( <MyPosts updateNewPostText = {changeNewPost} addPost = {addPost} 
                    posts = {store.getState().profilePage.posts}
                    newPostText = {store.getState().profilePage.newPostText}/>
                );
            }
        }
    </StoreContext.Consumer>
   
}
export default MyPostsContainer;