import React from "react";
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

export class Counter extends React.Component {
/*    constructor() {
        super();
        this.handleScore = this.handleScore.bind(this);
    }

    handleScore = (delta) => {
        this.setState((prevState) => ({score: prevState.score + delta}));
    }*/

    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
                <span className='counter-score'>{this.props.score}</span>
                <button className='counter-action increment' onClick={() => this.props.changeScore(this.props.id, 1)}> +</button>
            </div>
        );
    }
}

// mapFunctionToDispatchActionToProps << 하기 함수 풀네임
const mapActionToProps = (dispatch) => ({
    // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) function
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

export default connect(null, mapActionToProps)(Counter);