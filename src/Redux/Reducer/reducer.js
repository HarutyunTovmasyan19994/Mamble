import {ADD_TODO} from "../Action-types/action_type"


const initialState ={
    todoList:[]
}
const Reducer = (state = initialState,{type,payload})=>{
    switch (type){
        case ADD_TODO:
            return {...state,todoList: [...state.todoList,payload]}
        default:
            return state
    }

}
export default Reducer
