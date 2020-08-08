import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./action_types";

// action creator (function): action을 동적으로 생성
export const addPlayer = (name = '') => ({
    type: ADD_PLAYER,
    name
});

export const removePlayer = (id = '') => ({
    type: REMOVE_PLAYER,
    id
})

export const changeScore = (id = '', delta = '') => ({
    type: CHANGE_SCORE,
    id,
    delta
})
