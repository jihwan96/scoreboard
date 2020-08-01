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

        this.props.addPlayer(this.state.value);
        this.setState({value: ''});

    }

    render() {
        return (
            <form className="form">
                <input type="text" className="input" placeholder="enter a player's name"
                       value={this.state.value}
                       onChange={(e) => this.handleValueChange(e)}/>
                <input value="Add Player" type="submit" className="input"
                        onClick={(e) => this.handleSubmit(e)} />
            </form>
        );
    }
}