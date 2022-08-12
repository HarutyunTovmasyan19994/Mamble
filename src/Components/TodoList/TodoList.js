import React from "react"
import {useSelector} from "react-redux";
import "./TodoList.css"

const TodoList = () => {
    const todo = useSelector((state) => state.todoList.todoList)

    console.log(todo)
    return (
        <div>
            {todo.length ? (
                todo.map((item, index) => (
                    <div key={index} className="todoListWrapper">
                        <div className="todos">
                            <div className="todoCheckbox">
                                <input type="checkbox" className="inputCheckbox"/>
                                <p>{item.text}</p>
                            </div>
                            <button>&#9747;</button>
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
export default TodoList
