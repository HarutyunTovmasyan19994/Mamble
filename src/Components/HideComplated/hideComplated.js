import React from "react";
import "./hide.css"

const HideCompleted =() =>{
    return(
        <div className="HideCommon">
            <div className="form">
                <input type="checkbox" className="checkBox"/>
                <p className="hideText">Hide completed</p>
            </div>
        </div>
    )
}
export default HideCompleted
