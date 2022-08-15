import React, {useState} from "react"
import {TodoList} from "../../Redux/Action/action"
import {useDispatch, useSelector} from "react-redux";
import "./form.css"

const From = () => {
    const [formTodo, setFormTodo] = useState({text: ""})
    const [boolean,setBoolean] = useState(false)
    const todo = useSelector((state) => state.todoList.todoList)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormTodo({...formTodo, [name]: value})
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (formTodo.text.length >= 54 ){
           setBoolean(true)
        }else{
            dispatch(TodoList({...formTodo,id: new Date().getTime(),completed:false}))
            setBoolean(false)
        }

        setFormTodo({text: ""})
    }
    return (
        <div className="taskForm">
            <div className="forms">
                <p className="taskText">task</p>
                <form onSubmit={(e) => handleSubmitForm(e)}>
                    <div className="inputBtn">
                        <div className="errors">
                            <input
                                type="text"
                                className={boolean ? "taskInputError":"taskInput"}
                                name="text"
                                value={formTodo.text}
                                onChange={handleChange}
                            /><br/>
                            {boolean ? <p style={{color:"red"}}> Text should be 54 character not</p>:null}
                        </div>

                        <button className="btn">Add</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default From
