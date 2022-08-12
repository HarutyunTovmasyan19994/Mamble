import React, {useState} from "react"
import {TodoList} from "../../Redux/Action/action"
import {useDispatch, useSelector} from "react-redux";
import "./form.css"

const From = () => {
    const [formTodo, setFormTodo] = useState({text: ""})
    const todo = useSelector((state) => state.todoList.todoList)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormTodo({...formTodo, [name]: value})
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        dispatch(TodoList(formTodo))
        setFormTodo({text: ""})
    }
    console.log(todo)
    return (
        <div className="taskForm">
            <div className="forms">
                <p className="taskText">task</p>
                <form onSubmit={(e) => handleSubmitForm(e)}>
                    <div className="inputBtn">
                        <input
                            type="text"
                            className="taskInput"
                            name="text"
                            value={formTodo.text}
                            onChange={handleChange}
                        />
                        <button className="btn">Add</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default From
