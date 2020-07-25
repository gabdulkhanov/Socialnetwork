import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebarPage: sidebarReducer
});

const store = createStore(reducers);

export default store;


