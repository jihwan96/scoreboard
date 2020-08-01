import {Counter} from "./Counter";
import React from "react";

export const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'>
                <button className='remove-player' onClick={() => props.removePlayer(props.id)}> x </button>
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    );
}