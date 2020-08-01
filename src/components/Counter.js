import React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        this.handleScore = this.handleScore.bind(this);
    }

    handleScore = (delta) => {
        this.setState((prevState) => ({score: prevState.score + delta}));
    }

    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={() => this.handleScore(-1)}> -</button>
                <span className='counter-score'>{this.props.score}</span>
                <button className='counter-action increment' onClick={() => this.handleScore(1)}> +</button>
            </div>
        );
    }
}