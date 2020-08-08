import _ from "lodash";
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../action_types";

const playerInitlState = {
    players: [
        {name: 'LDK', score: 0, id: 1},
        {name: 'HONG', score: 0, id: 2},
        {name: 'KIM', score: 0, id: 3},
        {name: 'PARK', score: 0, id: 4}
    ]
}
export const playerReducer = (state = playerInitlState, action) => {
    const players = [...state.players];
    let lastPlayer, lastId, player;

    switch (action.type) {
        case ADD_PLAYER:
            lastPlayer = _.maxBy(players, 'id');
            lastId = lastPlayer.id + 1;
            player = {
                name: action.name,
                score: 0,
                id: lastId
            };

            players.push(player);

            return {
                ...state.players,
                players
            }

        case REMOVE_PLAYER:
            const index = players.findIndex(player => player.id === action.id);
            players.splice(index, 1);

            return {
                ...state.players,
                players
            }

        case CHANGE_SCORE:
            players.forEach(player => {
                if (player.id === action.id)
                    player.score += action.delta;
            });

            return {
                ...state.players,
                players
            }

        default:
            return state;
    }
};