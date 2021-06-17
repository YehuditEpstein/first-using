import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from '../redux/reducers/userReducer'
import {addUser} from '../redux/middleware/userCrud'
const reducer=combineReducers({user})
const store=createStore(reducer,applyMiddleware(addUser))
window.store=store
export default store;