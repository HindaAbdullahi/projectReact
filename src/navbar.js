import { NavLink  } from "react-router-dom";
import React from "react";
import css from './index.css'

function NavrBar(props){
   
    return (
        <div className="navigation">
           <nav>
               
               
                <div>
                    <NavLink className={'navlink'} to={"/"}>Home  </NavLink>
                    <NavLink className={'navlink'} to={"/App"}>Expense tracker  </NavLink>
                    <NavLink className={'navlink'} to={"/cards"}>Team  </NavLink>
                    <NavLink className={'navlink'} to={"/team"}>contact  </NavLink>
                </div>
                </nav>
        </div>
    );
    
}



    export default NavrBar;