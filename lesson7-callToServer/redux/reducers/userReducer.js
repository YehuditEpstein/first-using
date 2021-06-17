import produce from 'immer'
import createReducer from '../reducerUtils'

const initialState = {
    users: []
    ,
    indexUser: 0
}
const userFunctions = {
    addUserAfterReturnFromServer(state, action) {
        state.users.push(action.payload)
    },
    setUsers(state, action) {
        state.users = action.payload
    },
    setUser(state, action) {
        state.users[state.indexUser][action.payload.name] = action.payload.value
    },
    saveIndexOfUserThatEditHimNow(state, action) {
        state.indexUser = action.payload
    },
}
const reducer = produce((state, action) => {
    createReducer(state, action, userFunctions)
}, initialState)

export default reducer;