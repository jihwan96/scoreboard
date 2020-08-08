import React from 'react';
import './css/app.css';
import {Header} from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import _ from "lodash";
import {connect} from "react-redux";

class App extends React.Component {

    render() {
        return (
            <div className='scoreboard'>
                <Header players={this.props.players}/>

                {
                    this.props.players.map(player =>
                        <Player name={player.name} score={player.score} key={player.id} id={player.id}/>
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
