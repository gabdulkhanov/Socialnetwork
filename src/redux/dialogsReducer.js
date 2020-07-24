const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
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