import {combineReducers} from "redux";
import Reducer from "./reducer";

const rootReducer = combineReducers({
    todoList:Reducer
})

export default rootReducer
