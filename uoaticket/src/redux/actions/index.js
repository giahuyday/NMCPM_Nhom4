import { createActions } from 'redux-actions'

export const getType = (reduxAction) => {
    return reduxAction.type; 
}
export const getUser = createActions({
    getUserRequest: undefined,
    getUserSuccess: (payload) => payload,
    getUserFailure: (err) => err
})