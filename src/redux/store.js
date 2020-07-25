import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";



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
            ],
            newMessageText: "YO YO YO"
        },
        sidebarPage : {}      
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);  
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);    
        this._rerenderEntireTree(this._state);
    }
    
}

export default store;

