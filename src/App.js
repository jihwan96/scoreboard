import React from 'react';
import './css/app.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import {AddPlayerForm} from "./components/AddPlayerForm";
import _ from "lodash";
import {connect} from "react-redux";

// const Counter = (props) => {
//     return (
//         <div className='counter'>
//             <button className='counter-action decrement'> -</button>
//             <span className='counter-score'>{props.score}</span>
//             <button className='counter-action increment'> +</button>
//         </div>
//     );
// }

class App extends React.Component {

    handleRemovePlayer = (id) => {
        console.log('remove player :: ' + id);

        this.setState(prevState => {
            // immutable : 원본데이터가 불변 => 새로운 배열을 리턴 (filter, map 함수가 있음)
            const players = [...prevState.players];
            const index = players.findIndex(player => player.id === id);
            players.splice(index, 1);

            return {players: players}
        });
    }

    handleChangeScore = (id, delta) => {
        //로직 구현
        this.setState(prevState => {
            const players = [...prevState.players];
            players.forEach(player => {
                if (player.id === id)
                    player.score += delta;
            });

            return {players: players};

        });
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            const players = [...prevState.players];
            let lastPlayer = _.maxBy(players, 'id');
            let lastId = lastPlayer.id;
            let player = {
                name: name,
                score: 0,
                id : lastId + 1
            };

            players.push(player);
            return {players:players};
        })
    }

    render() {
        return (
            <div className='scoreboard'>
                <Header players={this.props.players}/>

                {
                    this.props.players.map(player =>
                        <Player name={player.name} score={player.score} key={player.id} id={player.id}
                            // 2. function 을 props로 자식에게 내려준다.
                                removePlayer={this.handleRemovePlayer}
                                changeScore={this.handleChangeScore}/>
                    )
                }

                <AddPlayerForm addPlayer={this.handleAddPlayer}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // 왼쪽이 props, 오른쪽 store의 state
    players: state.playerReducer.players
});

export default connect(mapStateToProps, null)(App);
