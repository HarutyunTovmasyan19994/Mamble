import {ADD_TODO, DELETE_TODO,CHANGE_BOOLEAN} from "../Action-types/action_type"


const initialState = {
    todoList: [],
    completed: false
}
const Reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return {...state, todoList: [...state.todoList, payload]}
        case DELETE_TODO:
            return {...state, todoList: state.todoList.filter(item => item.id !== payload)}
        case CHANGE_BOOLEAN:
            return {...state,completed: payload}
        default:
            return state
    }

}
export default Reducer
