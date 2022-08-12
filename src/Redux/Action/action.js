import {ADD_TODO} from "../Action-types/action_type"

export function TodoList(payload){
    return{
        type:ADD_TODO,
        payload
    }
}
