import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {DeleteTodo} from "../../Redux/Action/action"
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./TodoList.css"

const TodoLists = () => {
    const [todoList, setTodoList] = useState([])
    const todo = useSelector((state) => state.todoList.todoList)
    const completed = useSelector((state) => state.todoList.completed)
    const dispatch = useDispatch()
    useEffect(() => {
        setTodoList(todo)
    }, [todo])
    const submit = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(DeleteTodo(id))
                },
                {
                    label: 'No',
                }
            ]
        });
    };
    const checkedHandle = (id) => {

        setTodoList(prev => prev.map(item => {
            if (item.id === id) {
                item.completed = true
            }
            return item
        }))
    }
    const None = JSON.parse(localStorage.getItem("NONE"))

    console.log(None,"none")

    return (
        <div>
            {todoList.length ? (
                todoList.map((item, index) => (
                    <div key={index} className= "todoListWrapper">
                        <div className="todos"  style={{display:`${None}`}}>
                            <div className="todoCheckbox">
                                <input
                                    type="checkbox"
                                    className="inputCheckbox"
                                    checked={item?.completed}
                                    onClick={()=> localStorage.setItem("ID",JSON.stringify(item.id))}
                                    onChange={() => checkedHandle(item.id)}
                                />
                                <p className={item.completed ? "todoTextLine" : "todoTex"}>{item.text}</p>
                            </div>
                            <button onClick={() => submit(item.id)}>&#9747;</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="todoWrapper">
                    <div>
                        <p className="yourLife">your life is a blank page. You write on it.</p>
                        <p className="soStart">So start by adding your tasks here.</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default TodoLists

//completed ? "todoListWrapperHide" : "todoListWrapper"
