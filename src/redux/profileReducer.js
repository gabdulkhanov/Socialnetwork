const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 6,
            message: state.newPostText,
            age: 27,
            likesCounts: 33
        };
        state.posts.push(newPost);
        state.newPostText = '';
  
    }
    else if (action.type === UPDATE_POST) {
        state.newPostText = action.newText;
     
    }

    return state;
}

export const addPostActionCreator = () => { return {type: ADD_POST}};

export const updatePostActionCreator = (text) => { return {type: UPDATE_POST, newText: text}};

export default profileReducer;