import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ChangeBoolean} from "../../Redux/Action/action"
import "./hide.css"

const HideCompleted = () => {
    const [todo, setTodo] = useState([])
    const [show,setShow] = useState("")
    const user = useSelector((state) => state.todoList.todoList)
    const dispatch = useDispatch()
    useEffect(() => {
        setTodo(user)
    }, [user])

    const ID = JSON.parse(localStorage.getItem("ID"))

    const handleHidShow = (event) => {
        const {checked} = event.target
        if (checked){
            todo.map(todo =>{
                if(todo.id === ID){
                    setShow("none")
                }
                return todo

            })
        }
    }
    localStorage.setItem("NONE",JSON.stringify(show))
    console.log(ID,"local")
    return (
        <div className="HideCommon">
            <div className="form">
                <input
                    type="checkbox"
                    className="checkBox"
                    onChange={handleHidShow}
                />
                <p className="hideText">Hide completed</p>
            </div>
        </div>
    )
}
export default HideCompleted
