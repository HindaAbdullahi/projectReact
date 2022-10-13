import React from "react";
import { NavLink  } from "react-router-dom";
const Navigation =()=>{
    return(
        <div>
            <NavLink className={'navlink'} to={"/"}>Home</NavLink>
            <NavLink className={'navlink'} to={"App"}>Expense</NavLink>
            <NavLink className={'navlink'} to={"Contact"}>contact</NavLink>
        </div>
    )
}
export default Navigation;