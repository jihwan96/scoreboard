import React from "react";
import _ from "lodash";

export const Statistics = (props) => {
    let totalPlayers = props.players.length;
    let totalScore = 0;

    // props.players.forEach((player) => totalScore += player.score);

    /* lodash case 1*/
    // totalScore = _.sumBy(props.players, player => player.score);

    /* lodash case 2*/
    totalScore = _.sumBy(props.players, 'score');

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{totalScore}</td>
            </tr>
            </tbody>
        </table>
    )
}