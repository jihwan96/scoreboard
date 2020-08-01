import React from 'react';
import './css/app.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

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
    state = {
        players: [
            {name: 'LDK', score: 0, id: 1},
            {name: 'HONG', score: 0, id: 2},
            {name: 'KIM', score: 0, id: 3},
            {name: 'PARK', score: 0, id: 4}
        ]
    }

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
        console.log('handleChangeScore :: ' + id + ", " + delta);
    }

    render() {
        return (
            <div className='scoreboard'>
                <Header/>

                {
                    this.state.players.map(player =>
                        <Player name={player.name} score={player.score} key={player.id} id={player.id}
                            // 2. function 을 props로 자식에게 내려준다.
                                removePlayer={this.handleRemovePlayer}
                                changeScore={this.handleChangeScore}/>
                    )
                }
            </div>
        );
    }
}

export default App;
