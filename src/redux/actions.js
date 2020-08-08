// action creator (function): action을 동적으로 생성
export const addPlayer = (name = '') => ({
    type: 'ADD_PLAYER',
    name
});
