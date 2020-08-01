import React from "react";
import {Statistics} from "./Statistics";

export const Header = (props) => {
    return (
        <header className='header'>
            <Statistics players={props.players}/>
            <h1 className='h1'>Scoreboard</h1>
            <span className='stats'>Players: 1</span>
        </header>
    );
}