import React from "react";
import From from "../Components/Form/form";
import HideCompleted from "../Components/HideComplated/hideComplated";
import TodoLists from "../Components/TodoList/TodoList";
import "./pages.css"

const Pages = () => {
    return (
        <div className="formCommon">
            <HideCompleted/>
            <From/>
            <TodoLists/>
        </div>
    )
}
export default Pages
