import _ from "lodash";
import {ADD_PLAYER} from "../action_types";

const playerInitlState = {
    players: [
        {name: 'LDK', score: 0, id: 1},
        {name: 'HONG', score: 0, id: 2},
        {name: 'KIM', score: 0, id: 3},
        {name: 'PARK', score: 0, id: 4}
    ]
}
export const playerReducer = (state = playerInitlState, action) => {

    switch (action.type) {
        case ADD_PLAYER:
            const players = [...state.players];
            let lastPlayer = _.maxBy(players, 'id');
            let lastId = lastPlayer.id;
            let player = {
                name: action.name,
                score: 0,
                id: lastId + 1
            };

            players.push(player);

            return {
                ...state.players,
                players
            }

        default:
            return state;
    }
};