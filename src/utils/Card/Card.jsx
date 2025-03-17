import React from "react";
import './card.css'
import { LuCircleArrowOutUpRight } from "react-icons/lu";

function Card(props) {
    return (
        
        <div className="card">
            <div>
                <img src={props.image}/>
            </div>
            <div className="card-items">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <br />
            <a href={props.live}>Live Preview  <LuCircleArrowOutUpRight /></a>
            </div>
        </div>
    );
}

export default Card;