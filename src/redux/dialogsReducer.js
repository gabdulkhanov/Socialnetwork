const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 6,
            message: state.newMessageText,                
            likesCounts: 47
        };
        state.messages.push(newMessage);
        state.newMessageText = '';       
    }
    else if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageText = action.newMessageText;      
    }

    return state;
}

export const sendActionCreator = () => { return {type: SEND_MESSAGE}};

export const updateMessageActionCreator = (body) => { return {type: UPDATE_NEW_MESSAGE, newMessageText: body}};

export default dialogsReducer;