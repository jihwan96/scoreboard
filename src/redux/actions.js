// action creator (function): action을 동적으로 생성
export const updateUser = (payload = '') => ({
    type: 'updateUser',
    payload
});
