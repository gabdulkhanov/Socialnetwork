const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
    posts :  [
        { id: 1, message: 'Hello name Jon', age : 26 ,  likesCounts : 43 },
        { id: 2, message: 'It\'s my first.', age : 24 , likesCounts : 1 },
        { id: 3, message: 'Speak English', age : 871 , likesCounts : 9999 }
    ],
    newPostText: "qwerty" 
}


const profileReducer = (state = initialState, action) => {
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