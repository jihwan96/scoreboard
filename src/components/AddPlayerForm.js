import React from "react";

export class AddPlayerForm extends React.Component {

    render() {
        return (
            <form className="form">
                <input type="text" className="input" placeholder="enter a player's name"/>
                <input type="submit" value="Add Player"/>
            </form>
        );
    }
}