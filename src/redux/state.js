const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';


let store = {

    _state : {
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
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
        alert("Tree");
    },

    subscibe(observer)  {
        this._rerenderEntireTree = observer;
    },    

    dispatch(action) {     
        if (action.type === ADD_POST) {
                let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                age: 27,
                likesCounts: 33
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        }
        else if (action.type === UPDATE_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
    }
    
}

export const addPostActionCreator = () => { return {type: ADD_POST}};

export const updatePostActionCreator = (text) => { return {type: UPDATE_POST, newText: text}};

export default store;

