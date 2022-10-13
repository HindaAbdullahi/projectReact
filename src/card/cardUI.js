import React from "react";
import img1 from './asset/cafimaad1.png';
// import  css from './style.css'

const Card=props=>{
return(
    <div className="card text-center">
        <div className="overlow">
            <img src={img1} alt="image1" ></img>

        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>
                Hinda Abdullahi Osman
            </h4>

        </div>


    </div>
);
}
export default Card;