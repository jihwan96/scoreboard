import React from "react";

export class AddPlayerForm extends React.Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        // form 의 기본 동작 막기
        e.preventDefault();

        const form = document.getElementById("form");
        const player = document.getElementById("player");

        console.log(form.checkValidity());
        console.log(player.validity.valid);

        if(!form.checkValidity()) {
            // err
            return false;
        }

        // this.props.addPlayer(this.state.value);
        // this.setState({value: ''});

    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit} noValidate id="form">
                <input type="text" className="input" placeholder="enter a player's name" id="player"
                       value={this.state.value} required
                       onChange={(e) => this.handleValueChange(e)}/>
                <input value="Add Player" type="submit" className="input" />
            </form>
        );
    }
}