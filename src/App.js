import React from 'react';
import './css/app.css';
import {Header} from './components/Header';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {CustomPlayer} from "./components/CustomPlayer";
import _ from "lodash";


class App extends React.Component {
    // high score 구하여 리턴
    getHighScore() {
        const highScoreObject = _.maxBy(this.props.players, 'score');
        let highScore = (highScoreObject) ? highScoreObject.score : 0;

        return (highScore !== 0) ? highScore : '';
    }

    render() {
        return (
            <div className='scoreboard'>
                <Header players={this.props.players}/>
                {
                    this.props.players.map(player =>
                        <CustomPlayer name={player.name} score={player.score} key={player.id} id={player.id}
                                      isHighScore={player.score === this.getHighScore()}/>
                    )
                }

                <AddPlayerForm/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // 왼쪽이 props, 오른쪽 store의 state
    players: state.playerReducer.players
});

export default connect(mapStateToProps, null)(App);
