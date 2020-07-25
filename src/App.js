import React from 'react';
import './css/app.css';


const Header = () => {
  return (
      <header className='header'>
        <h1 className='h1'>Scoreboard</h1>
        <span className='stats'>Players: 1</span>
      </header>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  }

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
          <span className='counter-score'>{this.state.score}</span>
          <button className='counter-action increment' onClick={() => this.handleScore(1)}> +</button>
        </div>
    );
  }
}

// const Counter = (props) => {
//     return (
//         <div className='counter'>
//             <button className='counter-action decrement'> -</button>
//             <span className='counter-score'>{props.score}</span>
//             <button className='counter-action increment'> +</button>
//         </div>
//     );
// }

const Player = (props) => {
  return (
      <div className='player'>
            <span className='player-name'>
                <button className='remove-player' onClick={() => props.removePlayer(props.id)}> x </button>
              {props.name}
            </span>
        <Counter score={props.score}/>
      </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4}
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

  render() {
    return (
        <div className='scoreboard'>
          <Header/>

          {
            this.state.players.map(player =>
                <Player name={player.name} score={player.score} key={player.id} id={player.id}
                    // 2. function 을 props로 자식에게 내려준다.
                        removePlayer={this.handleRemovePlayer}/>
            )
          }
        </div>
    );
  }
}

export default App;
