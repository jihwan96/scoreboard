import React from "react";
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";

export const Header = (props) => {
    return (
        <header className='header'>
            <Statistics players={props.players}/>
            <h1 className='h1'>Scoreboard</h1>
            <StopWatch/>
        </header>
    );
}