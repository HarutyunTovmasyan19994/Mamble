import {ADD_TODO, DELETE_TODO,CHANGE_BOOLEAN} from "../Action-types/action_type"

export function TodoList(payload){
    return{
        type:ADD_TODO,
        payload
    }
}
export function DeleteTodo(payload){
    return{
        type:DELETE_TODO,
        payload
    }
}
export function ChangeBoolean(payload){
    return{
        type:CHANGE_BOOLEAN,
        payload
    }
}
