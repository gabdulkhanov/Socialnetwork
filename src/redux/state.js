import { rerenderEntire } from "../render";

let state = {
    profilePage : { 
        posts :  [
            { id: 1, message: 'Hello name Jon', age : 26 ,  likesCounts : 43 },
            { id: 2, message: 'It\'s my first.', age : 24 , likesCounts : 1 },
            { id: 3, message: 'Speak English', age : 871 , likesCounts : 9999 }
        ],
        newPostText: "qwerty" 
    },

    messagePage : {
        dialogs : [
            { id: 1, name: 'Bob' },
            { id: 2, name: 'Mark' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Julia' },
            { id: 5, name: 'Fred' }
        ],

        messages : [
            { id: 1, message: 'Возможно.', likesCounts : 43 },
            { id: 2, message: 'Do you speak English?.', likesCounts : 0 },
            { id: 3, message: 'Thanks!' , likesCounts : 67 },
            { id: 4, message: 'Yo Yo Yo' , likesCounts : 75},
            { id: 5, message: 'Some message' , likesCounts : 3 }
        ]
    }
}

export let addPost = () => {    
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        age: 27,
        likesCounts: 33
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntire(state)
}

export let updateNewPost = (newText) => {    
    state.profilePage.newPostText = newText;
    rerenderEntire(state)
}

export default state;

