import Counter from "./Counter";
import React from "react";
import {changeScore, removePlayer} from "../redux/actions";
import {connect} from "react-redux";

export const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'>
                <button className='remove-player' onClick={() => props.removePlayer(props.id)}> x </button>
                {props.name}
            </span>
            <Counter score={props.score} id={props.id}/>
        </div>
    );
}

// mapFunctionToDispatchActionToProps << 하기 함수 풀네임
const mapActionToProps = (dispatch) => ({
    // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) function
    removePlayer: (id) => dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Player);